import { Reducer } from "redux";
import { TODO_STATUS_CHANGE } from "../actions/todos";
import Todo from "../Models/Todo";
import {TODO_ADDED} from "../actions/todos"

export type TodoState={
    
    [id:number]: Todo
};

export const todoInitialState:TodoState={};

const todoReducer:Reducer<TodoState>=(State=todoInitialState, action)=>{

  
    switch(action.type){
        case TODO_STATUS_CHANGE: {
                const {id, done}= action.payload;

                return {...State, [id]: {...State[id], done:done},};   
        }

        case TODO_ADDED:{
          const todo: Todo= action.payload;
          
          
          return{...State, [todo.id]:todo}
        }


}
return State;
}
export  default todoReducer;