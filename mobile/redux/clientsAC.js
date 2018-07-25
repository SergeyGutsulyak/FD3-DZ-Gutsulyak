const CLIENT_MODE_CHANGE='CLIENT_MODE_CHANGE';
const CLIENT_DATA_SAVE='CLIENT_DATA_SAVE';
const CLIENT_DELETE='CLIENT_DELETE';
const CLIENT_ADD='CLIENT_ADD';
const CLIENT_FILTER_BLOCK='CLIENT_FILTER_BLOCK';
const CLIENT_FILTER_ALL='CLIENT_FILTER_ALL';
const CLIENT_FILTER_ACTIVE='CLIENT_FILTER_ACTIVE';
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

const client_filter_block=function() {
  return {
    type: CLIENT_FILTER_BLOCK,
  };
}

const client_filter_all=function() {
  return {
    type: CLIENT_FILTER_ALL,
  };
}

const client_filter_active=function() {
  return {
    type: CLIENT_FILTER_ACTIVE,
  };
}

const client_add=function(newId) {
  return {
    type: CLIENT_ADD,
    newId:newId,
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
  client_filter_block,CLIENT_FILTER_BLOCK,
  client_filter_all,CLIENT_FILTER_ALL,
  client_filter_active,CLIENT_FILTER_ACTIVE,
  client_add_array,CLIENT_ADD_ARRAY,
}
