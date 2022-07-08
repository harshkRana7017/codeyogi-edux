import { useDispatch } from "react-redux";

export const TODO_ADDED =" todo added";
export const TODO_STATUS_CHANGE=" todo status chnaged";
export const TODO_DELETED=" todo hat gyi !!!!";



let nextId=0;

export const todoAddActionCreator=(Todo_txt:string, )=>{
    return{type:TODO_ADDED, payload:{task:Todo_txt, id:++nextId, done:false}}
};


export const todoStatusChangeActionCreator=(id:number, done:boolean)=>{
    return{ type: TODO_STATUS_CHANGE, payload:{id, done}}
} ;
