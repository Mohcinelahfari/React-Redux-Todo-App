import React from 'react';
import { useDispatch } from 'react-redux';
import { setCheck } from './features/TodosSlide';

function InputCheck({ todo }) {
    const dispatch = useDispatch()
    const handelChange = () => {
        dispatch(setCheck(todo.id))
    }
  return (
    <div style={styles.todoContainer}>
      <form>
        <input
          type="checkbox"
          name="done"
          id={todo.id}
          style={styles.checkbox}
          onChange={handelChange}
          checked={todo.done}
        />
        <label
          htmlFor={todo.id}
          style={{
            ...styles.label,
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? '#888' : '#000',
          }}
        >
          {todo.title}
        </label>
      </form>
    </div>
  );
}

const styles = {
  todoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f7f7f7',
  },
  checkbox: {
    marginRight: '10px',
    cursor: 'pointer',
  },
  label: {
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default InputCheck;
