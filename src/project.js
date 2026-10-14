export default function project(){

    function createProject(title,description,tasks=[]){
        this.id = crypto.randomUUID();
        this.title = title;
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
    createProject.prototype.removeTask = function(taskId){
        this.tasks = this.tasks.filter(task=>task.id !== taskId);
    }
    createProject.prototype.editProject = function(title,description){
        this.title = title;
        this.description = description;
    }

    function addProject(title,description,tasks=[]){
    const newProject = new createProject(title,description,tasks);
    Projects.push(newProject);
    return newProject;
    }

    function findProjects(id){
        return Projects.find(project=>project.id === id);
    }
    function deleteProject(projectId){
        const index = Projects.findIndex(project=>project.id!==projectId);
        if(index!==-1)
            Projects.splice(index,1);
    }
    return {addProject,Projects,findProjects,deleteProject};
} 