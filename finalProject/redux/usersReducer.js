import { LOAD_USERS } from './usersAC';

const initState={
    all:{},      //все пользователи
    crop:{},     //видимые пользователи
    mode:{dataReady:false},
}

function clientsReducer(state=initState,action) {
  //console.log("Редьюсер");
  //console.log('Тип действия:'+action.type);
  switch (action.type) {
    case LOAD_USERS:{
      //let usersHash={};
      /*
      for (var numEl in action.clientArr) {
        let element=action.clientArr[numEl];
        usersHash[element.id]={data:element,mode:{canEdit:false}};
      }
      */
    //console.log(clientHash);
    console.log(action.users);
    let newState={
      
        all:{...action.users.data},//все пользователи
        crop:{...action.users.data},//отображаемые пользователи
        mode:{dataReady:true}
    };
      return newState;
    };

    default:
      return state;
  }
}

export default clientsReducer;