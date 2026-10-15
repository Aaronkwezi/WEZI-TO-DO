import task from "./task.js";
import project from "./project.js";
import {Overdue,UpComingTasks,todaysTasks} from "./date.js";
import { renderApp } from "./dom.js";
import { loadProjects } from "./storage.js";

const savedProjects = loadProjects();
const taskManager = task();
const projectManager = project(savedProjects,taskManager);
console.log("Loaded projects:", projectManager.Projects);
renderApp(taskManager,projectManager);