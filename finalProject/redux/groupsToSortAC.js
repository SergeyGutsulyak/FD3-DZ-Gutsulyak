const LOAD_GROUPS_TO_SORT='LOAD_GROUPS_TO_SORT';
const CHANGE_STATUS_GROUP='CHANGE_STATUS_GROUP';
const SET_FFILTER_GROUP='SET_FFILTER_GROUP';
const CLEAR_FFILTER_GROUP='CLEAR_FFILTER_GROUP'

const groups_load_to_sort=function(loadedGroups) {
  return {
    type: LOAD_GROUPS_TO_SORT,
    groups:loadedGroups,
  };
}

const group_change_status=function(idGroup,newStatus) {
  return {
    type: CHANGE_STATUS_GROUP,
    idGroup:idGroup,
    newStatus:newStatus,
  };
}
const groups_set_filter=function(filteredStatus) {
  return {
    type: SET_FFILTER_GROUP,
    filteredStatus:filteredStatus,
  };
}

const groups_clear_filter=function() {
  return {
    type: CLEAR_FFILTER_GROUP,
  };
}
export {
  groups_load_to_sort, LOAD_GROUPS_TO_SORT,
  group_change_status,CHANGE_STATUS_GROUP,
  groups_set_filter,SET_FFILTER_GROUP,
  groups_clear_filter,CLEAR_FFILTER_GROUP

}

