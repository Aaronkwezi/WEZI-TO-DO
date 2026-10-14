export function saveProject(project){
    let projects = JSON.parse(localStorage.getItem('projects'))|| [];
    projects.push(project);
    localStorage.setItem('projects',JSON.stringify(projects));
}

export function updateTasks(id){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task =>{
        if(task.id === id){
            task
        }
    })
}