import task from "./task.js";
import project from "./project.js";
import {Overdue,UpComingTasks,todaysTasks} from "./date.js";
import { saveProject,updateTasks } from "./storage.js";
import { renderApp } from "./dom.js";

const taskManager = task();
const projectManager = project();
const myTask = taskManager.addTask("Bigday","WE gonna party", "10-3-26","Poor");
const myProject = projectManager.addProject("WEZI","Shopping places",[myTask]);
renderApp(taskManager);