const LOAD_USERS='LOAD_USERS';
const CHANGE_USERS_PAGE='CHANGE_USERS_PAGE';
const CHANGE_DATA_READY='CHANGE_DATA_READY';

const users_load=function(loadedUsers) {
  return {
    type: LOAD_USERS,
    users:loadedUsers,
  };
}

const change_users_page=function(numberPage) {
  return {
    type: CHANGE_USERS_PAGE,
    page:numberPage,
  };
}

const change_users_dataready=function(isReady) {
  return {
    type: CHANGE_DATA_READY,
    isReady:isReady,
  };
}

export {
  users_load, LOAD_USERS,
  change_users_page, CHANGE_USERS_PAGE,
  change_users_dataready,CHANGE_DATA_READY,
}

