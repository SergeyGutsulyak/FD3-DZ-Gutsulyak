const LOAD_USERS='LOAD_USERS';
const CHANGE_USERS_PAGE='CHANGE_USERS_PAGE';

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

export {
  users_load, LOAD_USERS,
  change_users_page, CHANGE_USERS_PAGE,
}

