import { ChangeEvent, FC,  useState } from "react";
import { memo } from "react";
import { todoAddActionCreator } from "../actions/todos";
import {connect} from "react-redux";

type TodoCreatorProps={
  onSubmit: (Todo_txt: string) =>void;

};


const TodoCreator:FC<TodoCreatorProps> =({onSubmit})=>{

    const[inputValue,updateInputValue]=useState("");


    const onInputChange=(event:ChangeEvent<HTMLInputElement>)=>{
      updateInputValue(event.target.value);
      
    };
     

    const handleSubmit=()=>{
    onSubmit(inputValue)
  updateInputValue("")}
    
 


    
    return(<div className="mt-4 flex items-center">
        <input className="p-1 border-2" type="text" placeholder="type todo here" onChange={onInputChange} value={inputValue}/>
        <button className="border-2 rounded-lg ml-4 p-2 " onClick={handleSubmit} >Add Task </button>
        </div>
    )
};
TodoCreator.defaultProps={};




export default connect(undefined, {onSubmit: todoAddActionCreator})(memo(TodoCreator));

