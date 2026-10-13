
import { isBefore,isAfter,isSameDay, startOfDay} from "date-fns";

export function Overdue(tasks){
        const today = new Date();
        return tasks.filter(task => !task.completed && isBefore(startOfDay(task.dueDate),startOfDay(today)));
    
}
export  function UpComingTasks(tasks){{
        const today = new Date();
        return tasks.filter(task => isAfter(startOfDay(task.dueDate),startOfDay(today)));
    }
}
export function todaysTasks(tasks){
        const today = new Date();
        return tasks.filter(task => isSameDay(task.dueDate,today));
}