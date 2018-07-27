import { combineReducers } from 'redux';

import clientsReducer from "./clientsReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    clients: clientsReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
