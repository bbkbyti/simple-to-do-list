import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, removeTodo } from '../redux/todoSlice';

export default function TodoItem({ todo }) {

    const dispatch = useDispatch();

    const handleUpdate = (id, text) => {
        const updateText = prompt('Update todo:', text);
        if (updateText !== null) {
            dispatch(updateTodo({ id, text: updateText }))
        }
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch(removeTodo(id));
        }
    }


    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => handleUpdate(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
    )
}
