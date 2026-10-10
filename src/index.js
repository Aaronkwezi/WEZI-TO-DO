import task from "./task.js";
const taskManager = task();
const myTask = taskManager.addTask("Bigday","WE gonna party", "12-3-26","High");
console.log(myTask);
console.log(myTask.toggleStatus());
console.log(myTask);