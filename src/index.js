import task from "./task.js";
import project from "./project.js";
import {Overdue,UpComingTasks,todaysTasks} from "./date.js";
import { saveProject } from "./storage.js";
const taskManager = task();
const projectManager = project();
const myTask = taskManager.addTask("Bigday","WE gonna party", "10-3-26","Poor");
const myProject = projectManager.addProject("WEZI","Shopping places",[myTask]);
console.log(myProject.isDone());
console.log(myProject);
saveProject(myProject)
console.log(JSON.parse(localStorage.getItem("projects")));
console.log(myTask === taskManager.tasks[0]);
console.log(myTask.toggleStatus());
console.log(myProject.isDone());
console.log(myTask);
console.log(myTask.taskPriority());
console.log(Overdue(taskManager.tasks));
