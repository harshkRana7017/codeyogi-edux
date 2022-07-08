import TodoModel from "../Models/Todo";
import {FC} from "react";
import { memo } from "react";
import Todo from "../Models/Todo";
import TodoRow from "./TodoRow";
import { State } from "../store";
import { completeTodoSelector, IncompleteTodoSelector, todoListSelector, todoStateSelector } from "../selectors/todos";
import { connect } from "react-redux";
import { todoStatusChangeActionCreator } from "../actions/todos";

type TodoListProps={
    todos:Todo[];
    onStatusChange:(id:number, done:boolean)=>void;
};

const TodoList: FC<TodoListProps> = (  {todos, onStatusChange} )=>{
        
    
    return(
        todos.map((t:Todo)=>(<TodoRow key={t.id} todo={t} onStatusChange={onStatusChange}/>))
    )
}
TodoList.defaultProps={};

export default memo(TodoList);

const incompleteMapper=(s:State)=>({
            todos:IncompleteTodoSelector(s)
});


const completeMapper=(s:State)=>({
   
   todos:completeTodoSelector(s)
});


 const mapDispatchToProps={
    onStatusChange: todoStatusChangeActionCreator
 }

export const IncompleteTodoList= connect(incompleteMapper, mapDispatchToProps)(TodoList);
export const CompleteTodoList= connect(completeMapper, mapDispatchToProps)(TodoList);
