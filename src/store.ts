import { applyMiddleware, Reducer } from  "redux"
import { createStore } from "redux"
import todoReducer, { todoInitialState, TodoState } from "./States/Todo"
import userReducer, { userInitialState, UserState } from "./States/User"
import sagaMiddleware from "./Sagas/index"
import { rootSaga } from "./Sagas/index"
export type State={
todos: TodoState
users: UserState
};


const initialState: State = {
    todos:todoInitialState,
    users:userInitialState
    
};




 const reducer: Reducer<State> =(State=initialState, action)=>{
    return{
        todos:todoReducer(State.todos,action),
        users:userReducer(State.users, action)

    }

    
           
                
              
 }
 const store = createStore(reducer, applyMiddleware(sagaMiddleware));
 
 sagaMiddleware.run(rootSaga);


 export default store;
