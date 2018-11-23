
import React from 'react';

import {connect} from 'react-redux';
import SearchUsersForm from '../components/SearchUsersForm.jsx';
import {users_load,change_users_dataready,change_users_page} from '../redux/usersAC';
import {groups_change_current} from '../redux/groupsAC';
import ReqAJAX from '../my_modules/ReqAJAX';
import {MAIN_HOST} from '../my_modules/Settings';


class Page_SearchUsers extends React.PureComponent {

  render() {
    console.log('Page_SearchUsers')
    
    //page={this.props.match.params.page}
    return (
      <SearchUsersForm/>
      // <div className='ttt'>{'Hello'}</div>
    );
  }
}

// const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  // return { }; 
// };


// export default connect(mapStateToProps)(Page_SearchUsers);
export default Page_SearchUsers;