document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById("time");
    const nameElement = document.getElementById("name");

    // Display current time
    const currTime = new Date().toLocaleTimeString();
    timeElement.textContent = `Time is now ${currTime}`;

    // Set badge text
    chrome.action.setBadgeText({ 
        text: "TIME" 
    }, () => {
        console.log("Finished Badge text");
    })

    // Retrieve and display name from storage
    chrome.storage.sync.get("name", (data) => {
        nameElement.textContent = data.name || "No name set";
    });
});