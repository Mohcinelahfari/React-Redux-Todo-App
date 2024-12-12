import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoItems } from './features/TodosSlide';
import InputCheck from './InputCheck';
import "./App.css"
const App = () => { 
  const [input , setInput] = useState("")
  const dispatch = useDispatch()
  const TodoList = useSelector((state) => state.todoList.todosList)
  const handleAddTodo = (e) => {
    e.preventDefault()
    if(input){
      dispatch(TodoItems({
      id : Date.now(),
      title : input,
      dane : false
    }))
    
    }else{
      alert("Entrez todo title")
    }
    
    setInput("")
  }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Todo List</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTodo}>Add</button>

                {
                  TodoList.map((todo) => (
                    <InputCheck todo = {todo} key={todo.id} />
                  ))
                }
            </div>
            <ul>
                
            </ul>
        </div>
    );
};

export default App;
