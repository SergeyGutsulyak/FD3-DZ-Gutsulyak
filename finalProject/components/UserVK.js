import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {clientMode_change, clientData_save, client_delete} from '../redux/clientsAC';

import './UserVK.css';

class UserVK extends React.PureComponent {
/*
  static propTypes = {
    client:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      canEdit:PropTypes.boolean.isRequired,
    })
  };
  */
/*
  state = {
    FIO: this.props.FIO,
    balance: this.props.balance,
    canEdit:false,
  };
  */
/*
  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({FIO:newProps.FIO,balance:newProps.balance,canEdit:newProps.canEdit});
  };
*/
  render(){
    return (
      <div className='userVK'>
        <div className='shortView'>
          <div className='userPhoto'>
            <a href={'https://vk.com/'+this.props.userData['domain']} target="_blank">
              <img
                src={this.props.userData['photo_100']}
              />
            </a>
          </div>
          <div className='userInfoShot'>
            <div className='userName'>
              <a href={'https://vk.com/'+this.props.userData['domain']} target="_blank">
              {this.props.userData['first_name']+this.props.userData['last_name']}
              </a>
            </div>
          </div>
        </div>
        <div className='fullView'>  

        </div>

      </div>
    )};    
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux

//export default connect(mapStateToProps)(MobileClient);

export default UserVK