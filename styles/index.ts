// inherit from base layouts, remove it to get full customizations
import '@slidev/client/styles/layouts-base.css'
import './layout.css'

let done = []
const callback = (mutationList, observer) => {
    const pages = document.getElementsByClassName("slidev-page")
    for (let pageNode of pages) {
        let pageNo: number = undefined
        for (let className of pageNode.classList) {
            if (className.startsWith("slidev-page-")) {
                pageNo = (<number>className.substring("slidev-page-".length))
            }
        }
        let layoutNode = pageNode.getElementsByClassName("slidev-layout")[0] || undefined
        let imgPresent = (pageNode.getElementsByClassName("tum-logo")?.length || 0) > 0
        if (!imgPresent) {
            const tumLogoImage = document.createElement("img")
            tumLogoImage.src = "../assets/tum_logo_blue.svg"
            tumLogoImage.alt = "TUM"
            const tumLogoContainer = document.createElement("div")
            tumLogoContainer.classList.add("tum-logo")
            tumLogoContainer.appendChild(tumLogoImage)
            pageNode.appendChild(tumLogoContainer)
        }

        let pageNoPresent = (pageNode.getElementsByClassName("tum-pageno")?.length || 0) > 0
        if (layoutNode === undefined || layoutNode.classList.contains("cover") || layoutNode.classList.contains("intro")) {
            if (pageNoPresent) {
                for (let pageNoElem of pageNode.getElementsByClassName("tum-pageno")) {
                    pageNode.removeChild(pageNoElem)
                }
            }
        } else {
            if (!pageNoPresent) {
                const tumPageNo = document.createElement("span")
                tumPageNo.classList.add("tum-pageno")
                tumPageNo.innerText = pageNo === undefined ? "" : pageNo.toString()
                pageNode.appendChild(tumPageNo)
            }
        }
    }
}

const observer = new MutationObserver(callback)
const config = {attributes: false, childList: true, subtree: true};
observer.observe(document.getRootNode(), config)
