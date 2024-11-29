const timeElement = document.getElementById("time");
const CurrTime = new Date().toLocaleTimeString();
timeElement.textContent=`Time is now ${CurrTime}`;

chrome.action.setBadgeText({
    text:"Time"
},()=>{
    console.log("Finished Badge text");
})