import { User } from "../Models/Users";
import {FC, memo, useEffect} from "react"
import UserRow from "./userRow";
import { userSelector } from "../selectors/user";
import { connect } from "react-redux";
import { State } from "../store";
import {fetchStudentsActionCretor} from "../actions/students"
type userListProps={
   users:User[];
   getStudents:()=> any;
};




 const userList: FC<userListProps>=({users, getStudents})=>{
   useEffect(()=>{
       getStudents();
   },[])

    return (
        <div>
    
    {users.map((user)=><UserRow user={user}/>)}
    </div>
    )
 }

 const MapStateToProps=(state:State)=>({
    users:userSelector(state),
 })
 const MapDispatchToProps={
   getStudents: fetchStudentsActionCretor
 }
 export default connect(MapStateToProps, MapDispatchToProps)(memo(userList));
 