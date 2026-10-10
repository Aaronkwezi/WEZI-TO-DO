export default function task(){
    let tasks = [];

    function createtask(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
        this.completed = false;
    } 

    createtask.prototype.toggleStatus = function(){
        this.completed = !this.completed;
        return this.completed;
    }

    function addTask(title,description,dueDate,priority){
    const newTask = new createtask(title,description,dueDate,priority);
    tasks.push(newTask);
    return newTask;
    }

    return {addTask,tasks};
}