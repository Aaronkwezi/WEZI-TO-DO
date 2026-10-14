
import { isBefore,isAfter,isSameDay, startOfDay,parseISO} from "date-fns";

export function Overdue(tasks){
        const today = new Date();
        return tasks.filter(task => !task.completed && isBefore(startOfDay(parseISO(task.dueDate)),startOfDay(today)));
    
}
export  function UpComingTasks(tasks){
        const today = new Date();
        return tasks.filter(task => !task.completed && isAfter(startOfDay(parseISO(task.dueDate)),startOfDay(today)));
    
}
export function todaysTasks(tasks){
        const today = new Date();
        return tasks.filter(task => !task.completed && isSameDay(parseISO(task.dueDate),today));
}