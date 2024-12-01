document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello from the options page");
    const nameInput = document.getElementById("nameInput");
    const timeInput = document.getElementById("time-input");
    const saveButton = document.getElementById("saveButton");

    

    saveButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const notificationTime = timeInput.value;
        
        chrome.storage.sync.set({
            name,
            notificationTime
        },()=>{
            console.log(`name is ${name} and notification time is ${notificationTime}`);
        })
    });
    chrome.storage.sync.get(["name","notificationTime"],(res)=>{
        nameInput.value = res.name ?? "???";
        timeInput.value = res.notificationTime ?? 1000;
    })
});