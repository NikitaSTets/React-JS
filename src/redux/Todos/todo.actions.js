import axios from 'axios';

import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED
} from './todo.types';

export const addTodo = ({ title, userId }) => {
    return dispatch => {
        dispatch(addTodoStarted());

        axios
            .post(`https://jsonplaceholder.typicode.com/todos`, {
                title,
                userId,
                completed: false
            })
            .then(res => {
                setTimeout(() => {
                    dispatch(addTodoSuccess(res.data));
                }, 2500);
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });
    };
};

const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});