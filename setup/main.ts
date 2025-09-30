import {defineAppSetup} from "@slidev/types";

export default defineAppSetup(({ app }) => {
    // const callback = (mutationList, observer) => {
    //     const pages = document.getElementsByClassName("slidev-page")
    //     for (let pageNode of pages) {
    //         let pageNo: number = undefined
    //         for (let className of pageNode.classList) {
    //             if (className.startsWith("slidev-page-")) {
    //                 pageNo = (parseInt(className.substring("slidev-page-".length)))
    //             }
    //         }
    //         let layoutNode = pageNode.getElementsByClassName("slidev-layout")[0] || undefined
    //         let imgPresent = (pageNode.getElementsByClassName("tum-logo")?.length || 0) > 0
    //         if (!imgPresent) {
    //             const tumLogoContainer = document.createElement("div")
    //             pageNode.appendChild(tumLogoContainer)
    //
    //             const vnode = createVNode(GlobalTumLogo)
    //             ;(vnode as any).appContext = (app as any)._context
    //
    //             render(vnode, tumLogoContainer)
    //         }
    //
    //         let pageNoPresent = (pageNode.getElementsByClassName("tum-pageno")?.length || 0) > 0
    //         if (layoutNode === undefined || layoutNode.classList.contains("cover") || layoutNode.classList.contains("intro")) {
    //             if (pageNoPresent) {
    //                 for (let pageNoElem of pageNode.getElementsByClassName("tum-pageno")) {
    //                     pageNode.removeChild(pageNoElem)
    //                 }
    //             }
    //         } else {
    //             if (!pageNoPresent) {
    //                 const tumPageNo = document.createElement("span")
    //                 tumPageNo.classList.add("tum-pageno")
    //                 tumPageNo.innerText = pageNo === undefined ? "" : pageNo.toString()
    //                 pageNode.appendChild(tumPageNo)
    //             }
    //         }
    //     }
    // }
    //
    // const observer = new MutationObserver(callback)
    // const config = {attributes: false, childList: true, subtree: true};
    // observer.observe(document.getRootNode(), config)
})