// Initialize the tasks array.
let tasks = []; // Changed 'const tasks = []' to 'let tasks = []' because tasks are modified later in the code.

// Get the add task button and add a click event listener to it.
const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener("click", () => addTask());

// Fetch tasks from Chrome's storage when the extension loads.
chrome.storage.sync.get(["tasks"], (res) => {
    tasks = res.tasks ? res.tasks : []; // Correctly initializes tasks with fetched data or an empty array.
    renderTasks();
});

// Save tasks to Chrome's storage.
function saveTasks() {
    chrome.storage.sync.set({
        tasks,
    });
}

// Render a single task in the UI.
function renderTask(taskNum) {
    const taskRow = document.createElement('div'); // Create a container for a task row.

    const text = document.createElement('input'); // Create an input field for task text.
    text.type = 'text';
    text.placeholder = 'Enter Task';
    text.value = tasks[taskNum]; // Set the input's value to the current task text.
    text.addEventListener("change", () => {
        tasks[taskNum] = text.value; // Update the task in the array when the input value changes.
        console.log(tasks); // Debugging: Print the updated tasks array.
        saveTasks(); // Save the updated tasks array to Chrome's storage.
    });

    const deleteBtn = document.createElement('input'); // Create a delete button for the task.
    deleteBtn.type = "button";
    deleteBtn.value = "X";
    deleteBtn.addEventListener("click", () => {
        deleteTask(taskNum); // Call deleteTask when the button is clicked.
    });

    // Append the input and delete button to the task row.
    taskRow.appendChild(text);
    taskRow.appendChild(deleteBtn);

    // Add the task row to the task container.
    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskRow);
}

// Add a new task.
function addTask() {
    const taskNum = tasks.length; // Calculate the new task's position.
    tasks.push(""); // Add an empty string to the tasks array.
    renderTask(taskNum); // Render only the new task instead of all tasks.
    saveTasks(); // Save the updated tasks array to Chrome's storage.
}

// Delete a task and re-render the tasks.
function deleteTask(taskNum) {
    tasks.splice(taskNum, 1); // Remove the task from the array.
    renderTasks(); // Re-render all tasks to ensure the UI is updated correctly.
    saveTasks(); // Save the updated tasks array to Chrome's storage.
}

// Render all tasks in the UI.
function renderTasks() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.textContent = ""; // Clear the container before re-rendering.
    tasks.forEach((taskText, taskNum) => {
        renderTask(taskNum); // Render each task individually.
    });
}