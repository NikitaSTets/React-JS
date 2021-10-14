import { combineReducers } from "redux";

import counterReducer from './Counter/counter.reducer'
import postsReducer from './Poster/postsSlice'

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer
});

export default rootReducer;