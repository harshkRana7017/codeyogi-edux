import getStudents from "../api";
import {call} from "redux-saga/effects";


export function* GetStudents():Generator{
    const data= yield call(getStudents);
    console.log("data from api", data)
}
