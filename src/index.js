import task from "./task.js";
import project from "./project.js";

const taskManager = task();
const projectManager = project();
const myTask = taskManager.addTask("Bigday","WE gonna party", "12-3-26","High");
const myProject = projectManager.addProject("WEZI","Shopping places","13-4-25",[myTask]);
console.log(myProject.isDone());
console.log(myTask === taskManager.tasks[0]);
console.log(myTask.toggleStatus());
console.log(myProject.isDone());
console.log(myTask);