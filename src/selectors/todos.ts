import { values } from "lodash";
import { createSelector } from "reselect";
import {State} from "../store";
 export const todoStateSelector=(s:State)=>s.todos;


 export const todoListSelector= createSelector(todoStateSelector,(todoState)=>
   values(todoState)
 );

 export const completeTodoSelector= createSelector(todoListSelector, (todoList)=>
    todoList.filter((t)=>t.done)

 );
export  const IncompleteTodoSelector=createSelector(todoListSelector, (todoList)=>
    todoList.filter(t=>!t.done)
);








