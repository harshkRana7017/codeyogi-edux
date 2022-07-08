import { FC, memo } from "react";
import { User } from "../Models/Users"

type userRowProps={
    user:User
};


const userRow:FC<userRowProps>=({user})=>{
const {id, name}= user;
return(
    <div className="flex  items-center space-x-2">
        <h1>{id}</h1>
        <h1 className="text-3xl text-red-200">{name}</h1>
        
    </div>
)

}
export default memo(userRow);