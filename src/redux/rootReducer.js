import { combineReducers } from "redux";

import counterReducer from './Counter/counter.reducer';
import postsReducer from './Poster/postsSlice';
import todosReducer from './Todos/todosReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    todos: todosReducer
});

export default rootReducer;