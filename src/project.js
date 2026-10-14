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

    function addProject(title,description,tasks=[]){
    const newProject = new createProject(title,description,tasks);
    Projects.push(newProject);
    return newProject;
    }

    function findProjects(id){
        return Projects.find(project=>project.id === id);
    }
    function deleteProject(projectId){
        Projects = Projects.filter(project=>project.id!==projectId);
    }
    return {addProject,Projects,findProjects,deleteProject};
} 