export default function project(){

    function createProject(title,dueDate,description,tasks=[]){
        this.id = crypto.randomUUID();
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.tasks = tasks ?? [];
    };

    let defaultProject = new createProject("Default",null,null);

    const Projects = [defaultProject];

    createProject.prototype.addTask = function(task){
        this.tasks.push(task);
    }

    createProject.prototype.isDone = function(){
        return this.tasks.length>0 && this.tasks.every(task => task.completed);
    }

    function addProject(title,description,dueDate,tasks=[]){
    const newProject = new createProject(title,dueDate,description,tasks);
    Projects.push(newProject);
    return newProject;
    }
    return {addProject,Projects};
}