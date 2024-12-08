chrome.runtime.onInstalled.addListener((details)=>{
    chrome.contextMenus.create({
        title:"test context menu",
        id:"ContextMenu1",
        contexts:["selection","page"]
})
chrome.contextMenus.onClicked.addListener((event)=>{
    console.log(event);
})
chrome.contextMenus.create({
    title:"test context menu2",
    id:"ContextMenu2",
    contexts:["selection","page"],
    parentId:"ContextMenu1"
})
chrome.contextMenus.create({
    title:"test context menu3",
    id:"ContextMenu3",
    contexts:["selection","page"],
    parentId:"ContextMenu1"
})
})


console.log("background.js is running");

// chrome.runtime and chorme.contextMenus