document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello from the options page");
    const nameInput = document.getElementById("nameInput");
    const saveButton = document.getElementById("saveButton");

    

    saveButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        
        if (name) {
            chrome.storage.sync.set({ name }, () => {
                console.log(`Name is set to ${name}`);
                nameInput.value = ''; // Clear input after saving
            });
        } else {
            alert("Please enter a name");
        }
    });
});