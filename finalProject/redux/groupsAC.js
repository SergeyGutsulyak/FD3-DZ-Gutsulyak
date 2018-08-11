const LOAD_GROUPS='LOAD_GROUPS';

const groups_load=function(loadedGroups) {
  return {
    type: LOAD_GROUPS,
    groups:loadedGroups,
  };
}

export {
  groups_load, LOAD_GROUPS,
}

