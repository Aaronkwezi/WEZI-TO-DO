import task from "./task.js";
import project from "./project.js";
import {Overdue,UpComingTasks,todaysTasks} from "./date.js";

const taskManager = task();
const projectManager = project();
const myTask = taskManager.addTask("Bigday","WE gonna party", "10-3-26","Poor");
const myProject = projectManager.addProject("WEZI","Shopping places","12-4-26",[myTask]);
console.log(myProject.isDone());
console.log(myProject);
console.log(myTask === taskManager.tasks[0]);
console.log(myTask.toggleStatus());
console.log(myProject.isDone());
console.log(myTask);
console.log(myTask.taskPriority());
console.log(Overdue(taskManager.tasks));
