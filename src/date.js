
import { isBefore,isAfter,isSameDay, startOfDay,parseISO} from "date-fns";

export function Overdue(tasks){
        const today = new Date();
        return tasks.filter(task => !task.completed && isBefore(parseISO(startOfDay(task.dueDate)),startOfDay(today)));
    
}
export  function UpComingTasks(tasks){
        const today = new Date();
        return tasks.filter(task => !task.completed && isAfter(parseISO(startOfDay(task.dueDate)),startOfDay(today)));
    
}
export function todaysTasks(tasks){
        const today = new Date();
        return tasks.filter(task => !task.completed && isSameDay(parseISO(task.dueDate),today));
}