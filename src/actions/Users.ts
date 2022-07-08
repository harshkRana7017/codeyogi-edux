export const USER_ADDED= "nya user h";

let nextId=0;


export const userAddedActionCreator=( name:string)=>{
    return{type:USER_ADDED, payload:{id:++nextId, name:name }}
};

