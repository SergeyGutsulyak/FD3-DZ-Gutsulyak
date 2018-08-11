
import React from 'react';

import {connect} from 'react-redux';
import UsersList from '../components/UsersList';

class Page_Users extends React.PureComponent {
  
  render() {
    console.log('render PageUsers')
    
    //page={this.props.match.params.page}
    return (
        <div>
          <UsersList page={this.props.match.params.page}/>
        </div>

    );
  }
}

const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};


export default connect(mapStateToProps)(Page_Users);
//export default Page_Users;    