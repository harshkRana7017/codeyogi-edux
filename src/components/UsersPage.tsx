import {FC, memo} from "react";
import UserCreator from "./UserCreator";
import UserList from "./UserList";

type UserProps={};


const UserPage: FC<UserProps> =(props)=>{
    return(
    
    <div>
    <h1>this is users page</h1>
    <UserCreator/>
    <UserList/>
    </div>)

}
UserPage.defaultProps={};
export default memo(UserPage);