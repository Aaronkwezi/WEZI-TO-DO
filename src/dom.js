import project from "./project.js";
import { saveProjects } from "./storage.js";
export function renderApp(taskManager,projectManager){
   const app = document.querySelector("#app");

   const sidebar = createSidebar(taskManager,projectManager);
   app.replaceChildren(sidebar);
}
function createSidebar(taskManager,projectManager){
    const sideBar = document.createElement("aside");
    const newtaskbtn = document.createElement("button");
    newtaskbtn.textContent="New task";
    newtaskbtn.type = "button";
    newtaskbtn.addEventListener("click",()=>{
        createTask(taskManager,projectManager);
    })
    const addProjectbtn = document.createElement("button");
    addProjectbtn.textContent="Add Project";
    addProjectbtn.type = "button";
    addProjectbtn.addEventListener("click",()=>{
        createProject(taskManager,projectManager);
    })
    sideBar.append(newtaskbtn)
    sideBar.append(addProjectbtn);
    return sideBar;
}

function createTask(taskManager,projectManager,projectId){
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

        // pass taskData to your task manager and save the project.
        console.log(taskData);
        const newTask = taskManager.addTask(
            taskData.title,
            taskData.description,
            taskData.dueDate,
            taskData.priority
        );
        console.log(newTask);
        projectManager.addTaskToProject(newTask,projectId);
        console.log(projectManager.Projects);
        saveProjects(projectManager.Projects);
        form.remove();
        
    });
    
    form.querySelector("#cancel-task").addEventListener("click", () => {
        form.remove();
    });

    document.querySelector("#app").append(form);
    form.querySelector("#task-title").focus();
}

function createProject(taskManager,projectManager){
    if (document.querySelector("#task-form")) return;

    const form = document.createElement("form");
    form.id = "task-form";
    form.innerHTML = `
        <h2>New Project</h2>

        <label for="Project-title">Title</label>
        <input id="Project-title" name="title" type="text" required>

        <label for="Project-description">Description</label>
        <textarea id="Project-description" name="description" rows="3"></textarea>

        <button type="submit">Save Project</button>
        <button type="button" id="cancel-Project">Cancel</button>
    `;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const projectData = {
            title: formData.get("title").trim(),
            description: formData.get("description").trim(),
           
        };
        const newProject = projectManager.addProject(
            projectData.title,
            projectData.description,
        )
        console.log(newProject)
        console.log(projectManager.Projects);
        saveProjects(projectManager.Projects);
        form.remove();
        createTask(taskManager,projectManager,newProject.id);
    });

     form.querySelector("#cancel-Project").addEventListener("click", () => {
        form.remove();
    });

    document.querySelector("#app").append(form);
    form.querySelector("#Project-title").focus();
}
