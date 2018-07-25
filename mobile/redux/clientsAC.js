const CLIENT_MODE_CHANGE='CLIENT_MODE_CHANGE';
const CLIENT_DATA_SAVE='CLIENT_DATA_SAVE';
const CLIENT_DELETE='CLIENT_DELETE';
const CLIENT_ADD='CLIENT_ADD';
const CLIENT_FILTER='CLIENT_FILTER';
const CLIENT_ADD_ARRAY='CLIENT_ADD_ARRAY';

const clientMode_change=function(clientId,mode) {
  return {
    type: CLIENT_MODE_CHANGE,
    clientId:clientId,
    mode:mode,
  };
}

const clientData_save=function(clientId,clientFamily, clientName,clientOtch,balance) {
  return {
    type: CLIENT_DATA_SAVE,
    clientId:clientId,
    clientFamily:clientFamily,
    clientName:clientName,
    clientOtch:clientOtch,
    balance:balance,
  };
}

const client_delete=function(clientId) {
  return {
    type: CLIENT_DELETE,
    clientId:clientId,
  };
}

const client_add=function(typeFilter) {
  return {
    type: CLIENT_FILTER,
    typeFilter:typeFilter,
  };
}

const client_filter=function() {
  return {
    type: CLIENT_ADD,
  };
}

const client_add_array=function(clientArr){
  return {
    type: CLIENT_ADD_ARRAY,
    clientArr:clientArr,
  };
}

export {
  clientMode_change, CLIENT_MODE_CHANGE,
  clientData_save, CLIENT_DATA_SAVE,
  client_delete, CLIENT_DELETE,
  client_add, CLIENT_ADD,
  client_filter,CLIENT_FILTER,
  client_add_array,CLIENT_ADD_ARRAY,
}
