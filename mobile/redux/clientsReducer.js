﻿import { CLIENT_MODE_CHANGE,  CLIENT_DATA_SAVE,CLIENT_DELETE, 
  CLIENT_ADD, CLIENT_FILTER, } from './clientsAC';

const initState={

  // ключ - идентификатор счётчика, значение - число нажатий
  cnts: {},

}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function countersReducer(state=initState,action) {
  switch (action.type) {

    case CLIENT_MODE_CHANGE: {
      // надо создать новый счётчик
      // редьюсер ВСЕГДА должен возвращаеть новый state а не изменять старый!
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        cnts:{...state.cnts,
          [action.counterid]:0
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case COUNTER_BUTTON_ADD: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        cnts:{...state.cnts,
          [action.counterid]:state.cnts[action.counterid]+action.addvalue
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default countersReducer;
