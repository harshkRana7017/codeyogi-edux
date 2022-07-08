import createSagaMiddleware from "@redux-saga/core";
import {  takeLeading } from "redux-saga/effects";
import { FETCH_STUDENTS } from "../actions/students";
import getStudents from "../api"; 
const sagaMiddleware= createSagaMiddleware();

export function* rootSaga (){
    yield takeLeading(FETCH_STUDENTS, getStudents)
};


 export default sagaMiddleware;
