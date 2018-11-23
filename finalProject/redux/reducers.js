import { combineReducers } from 'redux';
import usersReducer from "./usersReducer";
import groupsReducer from "./groupsReducer";
import groupsToSortReducer from "./groupsToSortReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    users: usersReducer,
    groups:groupsReducer,
    groupsToSort:groupsToSortReducer,
    // + другие редьюсеры
});

export default combinedReducer;
