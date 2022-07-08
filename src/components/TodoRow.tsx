import { FC ,memo, useCallback} from "react";
import Todo from "../Models/Todo";
import cn from "classnames";

type TodoProps={
    todo:Todo;  
    onStatusChange:(id: number, done: boolean)=> void
};


 const TodoRow : FC<TodoProps> = ({todo, onStatusChange}) => {
    const {id, task, done}=todo;



    const handleChange = useCallback (()=>{
        onStatusChange(id, !done)
    },[id, done]);

console.log("upar wla")

    return(
        
    <div className="flex space-x-2 items-center">
        <input type="checkbox"  checked={done} onChange={handleChange}/>
        <p className={cn("ml-2", {"line-through": done})}> {task} </p>
    </div>
    
    );
    


 };
 TodoRow.defaultProps={}

 export default  memo(TodoRow);