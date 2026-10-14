export function renderApp(taskManager){
   const app = document.querySelector("#app");

   const sidebar = createSidebar(taskManager);
   app.replaceChildren(sidebar);
}
function createSidebar(taskManager){
    const sideBar = document.createElement("aside");
    const newtaskbtn = document.createElement("button");
    newtaskbtn.textContent="New task";
    newtaskbtn.type = "button";
    newtaskbtn.addEventListener("click",()=>{
        createTask(taskManager);
    })
    sideBar.append(newtaskbtn)
    return sideBar;
}

function createTask(taskManager){
    // Keep only one task form open at a time.
    if (document.querySelector("#task-form")) return;

    const form = document.createElement("form");
    form.id = "task-form";
    form.innerHTML = `
        <h2>New task</h2>

        <label for="task-title">Title</label>
        <input id="task-title" name="title" type="text" required>

        <label for="task-description">Description</label>
        <textarea id="task-description" name="description" rows="3"></textarea>

        <label for="task-due-date">Due date</label>
        <input id="task-due-date" name="dueDate" type="date" required>

        <label for="task-priority">Priority</label>
        <select id="task-priority" name="priority">
            <option value="Low">Low</option>
            <option value="Moderate" selected>Moderate</option>
            <option value="High">High</option>
        </select>

        <button type="submit">Save task</button>
        <button type="button" id="cancel-task">Cancel</button>
    `;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const taskData = {
            title: formData.get("title").trim(),
            description: formData.get("description").trim(),
            dueDate: formData.get("dueDate"),
            priority: formData.get("priority")
        };

        // Next step: pass taskData to your task manager and save the project.
        console.log(taskData);
        const newTask = taskManager.addTask(
            taskData.title,
            taskData.description,
            taskData.dueDate,
            taskData.priority
        );
        console.log(newTask);
        form.remove();
        
    });
    
    form.querySelector("#cancel-task").addEventListener("click", () => {
        form.remove();
    });

    document.querySelector("#app").append(form);
    form.querySelector("#task-title").focus();
}

function 
