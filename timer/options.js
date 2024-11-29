console.log("Hello from the options page");
const nameinput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click",()=>{
    console.log(nameinput.value);
})
