import { CLIENT_MODE_CHANGE,  CLIENT_DATA_SAVE,CLIENT_DELETE, 
  CLIENT_ADD, CLIENT_FILTER_BLOCK, CLIENT_FILTER_ALL, CLIENT_FILTER_ACTIVE, CLIENT_ADD_ARRAY } from './clientsAC';

const initState={

  // ключ - идентификатор счётчика, значение - число нажатий
    all:[],     //все клиенты
    crop:[]     //видимые клиенты
}
//console.log('файл clientsReducer');
//console.log(this.props);
// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function clientsReducer(state=initState,action) {
  //console.log("Редьюсер");
  //console.log('Тип действия:'+action.type);
  switch (action.type) {
    case CLIENT_ADD_ARRAY:{
      //console.log(CLIENT_ADD_ARRAY);
      let clientHash={};
      for (var numEl in action.clientArr) {
        let element=action.clientArr[numEl];
        clientHash[element.id]={data:element,mode:{canEdit:false}};
      }
    //console.log(clientHash);
    let newState={
        all:{...clientHash},//все клиенты
        crop:{...clientHash},//отображаемые клиенты
    };
      return newState;
    };

    case CLIENT_MODE_CHANGE:{
      let newState={...state};
      let client={...newState.crop[action.clientId]};
      client.mode.canEdit=action.mode;
      newState.crop[action.clientId]=client;


      return newState;
    }

    case CLIENT_DATA_SAVE:{
      let newState={...state};
      let client={...newState.crop[action.clientId]};
      client.data.fam=action.clientFamily;
      client.data.im=action.clientName;
      client.data.otch=action.clientOtch;
      client.data.balance=action.balance;
      client.mode.canEdit=false;
      newState.crop[action.clientId]=client;
      newState.all[action.clientId]=client;
      
      return newState;
    }

    case CLIENT_DELETE:{
      
      let newState={...state};

      //console.log(newState)
      delete newState.all[action.clientId];
      delete newState.crop[action.clientId];
      return newState;
    }
    case CLIENT_FILTER_ACTIVE: {
      //console.log(CLIENT_FILTER);

      let newState={...state}
      newState.crop={};
      for (var keyEl in newState.all){
        let client=newState.all[keyEl];
        //console.log(client);
        //console.log(client.balance);
        if (client.data.balance>0){
          newState.crop[keyEl]=client;
        }
      }
      return newState;
    };
    
    case CLIENT_FILTER_BLOCK: {
      //console.log(CLIENT_FILTER);

      let newState={...state}
      newState.crop={};
      for (keyEl in newState.all){
        let client=newState.all[keyEl];
        //console.log(client.balance);
        if (client.data.balance<=0){
          newState.crop[keyEl]=client;
        }
      }
      return newState;
    };

    case CLIENT_FILTER_ALL: {
      //console.log(CLIENT_FILTER);

      let newState={...state};
      newState.crop={...newState.all};
      return newState;
    };

    case CLIENT_ADD:{
      let newState={...state};
      newState.crop[action.newId]={data:{id:action.newId,fam:"",im:"",otch:"",balance:0},mode:{canEdit:true}};
      return newState;
    }
    default:
      return state;
  }
}

export default clientsReducer;
