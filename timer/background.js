chrome.alarms.create({
    periodInMinutes: 1/60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm fired", alarm);
    chrome.storage.local.get(["timer"],(res)=>{
        const time = res.timer ?? 0
        chrome.storage.local.set({timer: time + 1})  
        chrome.action.setBadgeText({text:`${time+1}`})
        if(time%10===0){
            this.registration.showNotification("Chrome timer Extension",{
                body:"1 second has passed",
                icon:"icon.png"
            })
        }

    })
})