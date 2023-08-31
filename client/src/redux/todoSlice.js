import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
            };
            state.push(newTodo);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        }
    }
})

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;