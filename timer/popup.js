document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById("time");
    const nameElement = document.getElementById("name");
    const timerElement = document.getElementById("timer");

    function updateTimerElement(){
        chrome.storage.local.get(["timer"],(res)=>{
            const time = res.timer ?? 0
            timerElement.textContent = `Timer: ${time}`  
        })
            // Display current time
    const currTime = new Date().toLocaleTimeString();
    timeElement.textContent = `Time is now ${currTime}`;
    }

updateTimerElement();
setInterval(updateTimerElement, 1000);



    // Retrieve and display name from storage
    chrome.storage.sync.get("name", (data) => {
        nameElement.textContent = data.name || "No name set";
    });
});