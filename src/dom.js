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
    const projectsMenu = document.createElement("button");
    projectsMenu.textContent = "Projects";
    projectsMenu.type = "button";
    projectsMenu.addEventListener("click",()=>{
        displayProjectsList(projectManager);
    })

    sideBar.append(newtaskbtn)
    sideBar.append(addProjectbtn);
    sideBar.append(projectsMenu);
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
    form.id = "project-form";
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

function displayProjectsList(projectManager){
    const projectList = document.createElement("main");
    projectList.id = "project-list"

    const currentList = document.querySelector("#project-list");
    if(currentList){
        currentList.remove();
    }

    projectManager.Projects.forEach(project => {
        const projectbtn = document.createElement("button");
        projectbtn.textContent = `${project.title}`;
        projectList.append(projectbtn);
        projectbtn.addEventListener("click",()=>{
            mainContent(project,projectManager);
        })
    });

    document.querySelector("#app").append(projectList);
}

function mainContent(project,projectManager){
    const content = document.createElement("div");
    content.id = "main-content";
    const taskContainer = document.createElement("div")
    taskContainer.classList.add("task-container");
    const heading = document.createElement("h2");
    heading.textContent= `${project.title}`;

    project.tasks.forEach(task=>{
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card")
        const taskTitle = document.createElement("p");
        taskTitle.textContent = task.title;
        const taskDescription = document.createElement("p");
        taskDescription.textContent = task.description;
        const taskDueDate = document.createElement("p");
        taskDueDate.textContent = task.dueDate;
        const taskPriority = document.createElement("p");
        taskPriority.textContent = task.priority;
        const deleteTaskbtn = document.createElement("button")
        deleteTaskbtn.textContent="Delete";
        deleteTaskbtn.type = "button";
        deleteTaskbtn.addEventListener("click",()=>{
            project.removeTask(task.id);
            saveProjects(projectManager.Projects);
            mainContent(project,projectManager);
        });
        const editTaskbtn = document.createElement("button");
        editTaskbtn.textContent="Edit";
        editTaskbtn.type = "button";
        editTaskbtn.addEventListener("click",()=>{
            if (document.querySelector("#edit-form, #task-form")) return;
            const form = document.createElement("form");
            form.id = "edit-form";
            form.innerHTML = `
            <h2>Edit task</h2>

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
        form.querySelector("#task-title").value = task.title;
        form.querySelector("#task-description").value = task.description;
        form.querySelector("#task-due-date").value = task.dueDate;
        form.querySelector("#task-priority").value = task.priority;
        form.addEventListener("submit", (event) => {
             event.preventDefault();

             const formData = new FormData(form);

            task.edit(
                formData.get("title").trim(),
                formData.get("description").trim(),
                formData.get("dueDate"),
                formData.get("priority")
            );
             saveProjects(projectManager.Projects);
            form.remove();
            mainContent(project, projectManager);
        });
       
        form.querySelector("#cancel-task").addEventListener("click", () => {
        form.remove();
    });
    document.querySelector("#app").appendChild(form);
    form.querySelector("#task-title").focus();
});

   


        
        taskCard.append(taskTitle,taskDescription,taskDueDate,taskPriority,deleteTaskbtn,editTaskbtn);
        taskContainer.append(taskCard);
    });

    if(project.tasks.length === 0){
        taskContainer.textContent = " Add a task to your Project.";
    }
    content.append(heading,taskContainer);

    const currentContent = document.querySelector("#main-content");
    if(currentContent){
        currentContent.replaceWith(content);
    }else{
        document.querySelector("#app").append(content);
    }

}