import { LOAD_GROUPS_TO_SORT,CHANGE_STATUS_GROUP,SET_FFILTER_GROUP,CLEAR_FFILTER_GROUP} from './groupsToSortAC';

//const START_USER_ON_PAGE=20;//количество отображаемых пользователй на странице

const initState={
    all:[],      //все группы
    filtered:[],
    mode:{dataReady:false},
    filteredStatus:null
}

function findGroup(arrGr,id){
   for (let key in arrGr){
    if (arrGr[key].id==id){
      var curKey=key
      break
    }
  }
  return curKey
}

function groupsToSortReducer(state=initState,action) {
  //console.log("Редьюсер");
  //console.log('Тип действия:'+action.type);
  switch (action.type) {
    case LOAD_GROUPS_TO_SORT:{
    
    console.log('Загрузка данных групп для сортировки');
    console.log(action.groups);
    
    let ArrayFromAjax=[];
    for (let i in action.groups.data){
      ArrayFromAjax.push(action.groups.data[i]);
    }

   
    let newState={...state,
        all:[...ArrayFromAjax],//все пользователи
        filtered:[...ArrayFromAjax],//отфильтрованные пользователи
        //crop:ArrayFromAjax.slice(0,START_USER_ON_PAGE),//отображаемые пользователи
        mode:{dataReady:true},
        filteredStatus:0
    };
      return newState;
    };
    case CHANGE_STATUS_GROUP:{
      //console.log('Изменение статуса'+action.idGroup)
      let arrAllGroups=[...state.all]
      let k=findGroup(state.all,action.idGroup);
      //console.log('Изменение статуса'+k)
      let group={...state.all[k]};
      group.status_int=action.newStatus;
      //console.log('Изменение статуса'+action.newStatus)
      arrAllGroups[k]=group

      let newState={...state,all:arrAllGroups}
      if (state.filteredStatus!=null){
        newState={...newState,filtered:arrAllGroups.filter((curValue)=>{return curValue.status_int==state.filteredStatus})}
      }
      else{
        newState={...newState,filtered:arrAllGroups}

      }
      //console.log(newState)
      return newState;

    }

    case SET_FFILTER_GROUP:{
      console.log('Установка фильтра')

      let newState={...state,filtered:state.all.filter((curValue)=>{return curValue.status_int==action.filteredStatus}),filteredStatus:action.filteredStatus}
      console.log(newState)
      return newState;
    }

    case CLEAR_FFILTER_GROUP:{
      let newState={...state,filtered:[...state.all]}
      //console.log(newState)
      return newState;
    }
    default:
      return state;
  }
}

export default groupsToSortReducer;