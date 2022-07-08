import { memo } from "react";
import { Reducer } from "redux";
import { USER_ADDED } from "../actions/Users";
import { User } from "../Models/Users"

export type UserState={
 
    [id:number]:User
    
};

export const userInitialState:UserState={};

const userReducer:Reducer<UserState>=(State=userInitialState, action)=>{
    switch(action.type){
        case USER_ADDED:{
            const user:User= action.payload;
            return{...State, [user.id]:user};
        }
    }
return State;

}
export default userReducer;