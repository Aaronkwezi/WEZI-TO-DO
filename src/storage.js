export function saveProject(project){
    let projects = JSON.parse(localStorage.getItem('projects'))|| [];
    projects.push(project);
    localStorage.setItem('projects',JSON.stringify(projects));
}

export function updateTasks(projectId,taskId,changes){
    const projects = JSON.parse(localStorage.getItem('projects'))|| [];
    const project = projects.find(project=>project.id === projectId);
    if(!project) return;

    const task = project.tasks.find(task=>task.id === taskId);
    if(!task) return;

    Object.assign(task,changes);
    localStorage.setItem('projects',JSON.stringify(projects));


}
export function deleteTask(projectId,taskId){
    const projects = JSON.parse(localStorage.getItem('projects'))|| [];
    const project = projects.find(project=>project.id === projectId);
    if(!project) return;

    const task = project.tasks.filter(task=>task.id !== taskId);
    if(!task) return;
    localStorage.setItem('projects',JSON.stringify(projects));
}