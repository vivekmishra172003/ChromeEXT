chrome.alarms.create("PomodoroTimer",{
    periodInMinutes: 1/60,
} )
chrome.alarms.onAlarm.addListener((alarm) =>{
    if(alarm.name === "PomodoroTimer"){
        chrome.storage.local.get(["timer","isRunning"],(res)=>{
            if(res.isRunning){
                let timer = res.timer +1;
                let isRunning = true;
                if(timer === 10){
                    this.registration.showNotification("Pomodoro Timer",{
                        icon:'../icon.png',
                        body: "25 minutes have passed!",
                    })
                    timer = 0;
                    isRunning = false;
                }
                console.log(timer);
                chrome.storage.local.set({
                    timer,
                    isRunning,
                })
            }
        })
    }
})


chrome.storage.local.get(["timer", "isRunning"], (res) => {
    chrome.storage.local.set({
        timer: "timer" in res ? res.timer : 0, // Set to 0 if 'timer' doesn't exist.
        isRunning: "isRunning" in res ? res.isRunning : false, // Set to false if 'isRunning' doesn't exist.
    });
});
