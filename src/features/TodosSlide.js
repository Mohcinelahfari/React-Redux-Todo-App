import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    todosList : []
}

const todoList = createSlice({
    name : "todos",
    initialState,
    reducers :{
        TodoItems : (state, action) => {
            state.todosList.push(action.payload)
        },
        setCheck : (state, action) => {
            state.todosList.map((todo) => {
                if(action.payload === todo.id){
                    todo.done ? (todo.done = false) : (todo.done = true)
                }
            })
        }
    }
})

export const {TodoItems, setCheck} = todoList.actions;
export default todoList.reducer