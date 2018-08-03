import { combineReducers } from 'redux';

import usersReducer from "./usersReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    users: usersReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
