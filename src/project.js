export default function project(savedProjects = [],taskManager){

    function createProject(title,description,tasks=[]){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.tasks = tasks ?? [];
    };

    
    const Projects = savedProjects.map(savedProject=>{
        const tasks = (savedProject.tasks || []).map(savedTask => {
            const restoredTask = taskManager.addTask(
                savedTask.title,
                savedTask.description,
                savedTask.dueDate,
                savedTask.priority
            );
            restoredTask.id = savedTask.id;
            restoredTask.completed = savedTask.completed;
            return restoredTask;
        });
          // Recreate the project so it has addTask(), isDone(), etc.
    const restoredProject = new createProject(
        savedProject.title,
        savedProject.description,
        tasks
    );

    restoredProject.id = savedProject.id;

    return restoredProject;

    });

    let defaultProject = Projects.find(project=> project.title=== "Default");
    if(!defaultProject){
        defaultProject = new createProject("Default","",[]);
        Projects.unshift(defaultProject);
    }

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
        const index = Projects.findIndex(project=>project.id === projectId);
        if(index!==-1)
            Projects.splice(index,1);
    }
    function addTaskToProject(task, projectId = defaultProject.id){
        const selectedProject = findProjects(projectId);
        if(!selectedProject) return;
        selectedProject.addTask(task);
    }
    return {addProject,Projects,findProjects,deleteProject,addTaskToProject};
} 
