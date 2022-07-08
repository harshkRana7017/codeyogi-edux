import { values } from "lodash";
import { State } from "../store";

export const userSelector=(s:State)=>{
    return values(s.users)};
    
