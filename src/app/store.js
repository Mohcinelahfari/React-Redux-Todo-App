import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/TodosSlide"

const store= configureStore({
    reducer : {
        todoList : TodoReducer 
    }
})

export default store