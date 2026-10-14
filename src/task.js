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
    createtask.prototype.taskPriority = function (){
        if(this.priority === "High" || 
            this.priority === "Moderate" ||
             this.priority === "Low"){
            
            return this.priority;
        }
        return "Invalid priority";
    }
    createtask.prototype.edit = function(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    function addTask(title,description,dueDate,priority){
    const newTask = new createtask(title,description,dueDate,priority);
    tasks.push(newTask);
    return newTask;
    }

    return {addTask,tasks};
}