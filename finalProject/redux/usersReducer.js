import { LOAD_USERS } from './usersAC';

const START_USER_ON_PAGE=20;//количество отображаемых пользователй на странице

const initState={
    all:[],      //все пользователи
    filtr:[],
    crop:{},     //видимые пользователи
    mode:{dataReady:false,
          UsersOnPage:START_USER_ON_PAGE,
        },
}
//расчет количества страниц
function culcCountPages(countUser,countUserOnPge){
  return Math.ceil(countUser,countUserOnPge);
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
    let ArrayFromAjax=[];
    for (let i in action.users.data){
      ArrayFromAjax.push(action.users.data[i]);
    }
    let countPages=culcCountPages(ArrayFromAjax.length,START_USER_ON_PAGE);
    let newState={
        all:[...ArrayFromAjax],//все пользователи
        filtr:[...ArrayFromAjax],//отфильтрованные пользователи
        crop:ArrayFromAjax.slice(0,START_USER_ON_PAGE),//отображаемые пользователи
        mode:{dataReady:true,
              UsersOnPage:START_USER_ON_PAGE,
              countPages:countPages,}
    };
      return newState;
    };

    default:
      return state;
  }
}

export default clientsReducer;