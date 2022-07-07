import { createSlice } from "@reduxjs/toolkit";

const initialState = {todos: [], };
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random() * 1000,
        title: action.payload.text
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action)=>{
        state.todos=state.todos.filter((item) => item.id !== action.payload.id);
    },
  
    editTodo: (state, action) => {
      console.log("check",action.payload)
      //  const List= state.todos.map((item) => 
          // item.id === action.payload.isEditItem?.id ? {id:action.payload.isEditItem?.id,title:action.payload.text}:item);
          // console.log("List:",List);
          // state.todos=List;
          console.log("Shivam1",action.payload);
         console.log("Shivam",action.payload.id,action.payload.text);
         const List= state.todos.map((item,index)=>{
            if(item.id=== action.payload.id){
              console.log("if",item)
                return {id:action.payload.id,title:action.payload.text}
            }
            else{
                console.log("else",item)
                return item;
            }
          })
          console.log("List",List);
          state.todos=List;
      },
     },
});
export const {addTodo,deleteTodo,editTodo} =todoSlice.actions;

export default todoSlice.reducer;