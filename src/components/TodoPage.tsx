import { FC, memo } from "react";
import  { CompleteTodoList, IncompleteTodoList } from "./TodoList";
import TodoCreator from "./TodoCreator";


type TodoPAgeProps={};

const TodoPage:FC<TodoPAgeProps>=(props)=>{
    return(
        <div className=" ml-4">
        <h3 className="text-slate-800 font-bold">Things TO DO </h3>
      <IncompleteTodoList/>
      <h3 className="mt-4 text-slate-800 font-bold">Things DONE</h3>
      <CompleteTodoList/>
      <TodoCreator/>
        </div>
    )


}
TodoPage.defaultProps={};
export default memo(TodoPage);