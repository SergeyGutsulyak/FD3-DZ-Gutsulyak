import { LOAD_USERS, CHANGE_USERS_PAGE } from './usersAC';

const START_USER_ON_PAGE=20;//количество отображаемых пользователй на странице

const initState={
    all:[],      //все пользователи
    filtr:[],
    crop:{},     //видимые пользователи
    mode:{dataReady:false,
          UsersOnPage:START_USER_ON_PAGE,
          countPages:1,
          curPage:1,
        },
}
//расчет количества страниц
function culcCountPages(countUser,countUserOnPge){
  return Math.ceil(countUser/countUserOnPge);
}

function usersReducer(state=initState,action) {
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
    console.log('Загрузка данных');
    console.log(action.users);
    
    let ArrayFromAjax=[];
    for (let i in action.users.data){
      ArrayFromAjax.push(action.users.data[i]);
    }
    let countPages=culcCountPages(ArrayFromAjax.length,START_USER_ON_PAGE);
    console.log('countPages='+countPages);
    let newState={
        all:[...ArrayFromAjax],//все пользователи
        filtr:[...ArrayFromAjax],//отфильтрованные пользователи
        crop:ArrayFromAjax.slice(0,START_USER_ON_PAGE),//отображаемые пользователи
        mode:{dataReady:true,
              usersOnPage:START_USER_ON_PAGE,
              countPages:countPages,
              curPage:1,}
    };
      return newState;
    };
    case CHANGE_USERS_PAGE:{
      console.log(CHANGE_USERS_PAGE);
      console.log('Номер страницы: '+action.page);
      let newState={...state,
        crop:state.filtr.slice(state.mode.usersOnPage*(action.page-1),state.mode.usersOnPage*action.page),
        mode:{...state.mode,curPage:action.page}};
        console.log(newState);
      return newState;
      }
    default:
      return state;
  }
}

export default usersReducer;