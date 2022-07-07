import React from "react";
import { useDispatch } from "react-redux";
import { addTodo,editTodo } from "../redux/todoSlice";

const Form = ({
  settext,
  text,
  isEditItem,
  setisEditItem
}) => {

 const dispatch=useDispatch();

  const inputTextHandler = (e) => {
    settext(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if(isEditItem.status)
    {
      dispatch(
        editTodo({
           text:text,id:isEditItem.id
        })
      )
    }
    else{
      dispatch(
        addTodo({
          text:text
        })
      )
      }
      settext(" ");
      setisEditItem({id:"",status:false});
  };
  console.log("Edit",isEditItem)
  return (
    <form>
      <input onChange={inputTextHandler} type="text" value={text} />
      
      <button onClick={submitTodoHandler}>{!isEditItem.status?"Add Todo":"Edit Item"} </button>
    </form>
  );
};

export default Form;
