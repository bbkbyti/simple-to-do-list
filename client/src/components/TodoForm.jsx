import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';


export default function TodoForm() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        dispatch(addTodo({ text }));
        setText('');
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add a new todo...'
                value={text}
                onChange={handleChange}
            />

        </form>
    )
}
