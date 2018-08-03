const LOAD_USERS='LOAD_USERS';

const users_load=function(loadedUsers) {
  return {
    type: LOAD_USERS,
    users:loadedUsers,
  };
}

export {
  users_load, LOAD_USERS,
}

