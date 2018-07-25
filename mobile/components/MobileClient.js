import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clientMode_change, clientData_save, client_delete} from '../redux/clientsAC';

import './MobileClient.css';

class MobileClient extends React.PureComponent {
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
  newFioRef=null;

  setNewFioRef=(ref)=>{
    this.newFioRef=ref;
  }

  getNewFio=()=>{
    if (this.newFioRef){
      return this.newFioRef.value;
    }
  }

  newBalanceRef=null;

  setNewBalanceRef=(ref)=>{
    this.newBalanceRef=ref;
  }
  
  getNewBalance=()=>{
    if (this.newBalanceRef){
      return this.newBalanceRef.value;
    }
  }


  startChange=()=>{
    this.props.dispatch(clientMode_change(this.props.client.data.id,true));
  }

  cancel=()=>{
    this.props.dispatch(clientMode_change(this.props.client.data.id,false));
  }

  save=()=>{
    let fam,name,otch;
    let fio=this.getNewFio();
    fio=fio.trim();
    fio=fio.replace(/\s+/g,' ');
    [fam,name,otch]=fio.split(' ');
    let balance=this.getNewBalance();
    this.props.dispatch(clientData_save(this.props.client.data.id,fam,name,otch,balance));

  }
  deleteClient=()=>{
    this.props.dispatch(client_delete(this.props.client.data.id));
  }
  render() {

    console.log("MobileClient id="+this.props.client.data.id+this.props.client.data.fam+" render");

    //const canEdit=this.state.canEdit;
    return (
        (!this.props.client.mode.canEdit)?(
          <div className='MobileClient'>
            <span className='MobileClientFIO'>{this.props.client.data.fam+" "+this.props.client.data.im+" "+this.props.client.data.otch}</span>
            <span className='MobileClientBalance'>{this.props.client.data.balance}</span>
            <input
              type='button'
              value='Удалить'
              onClick={this.deleteClient}
            />
            <input
              type='button'
              value='Изменить'
              onClick={this.startChange}
            />
          </div>
        ) : (
          <div className='MobileClient'>
            <input
              type='text'
              className='MobileClientFIO'
              defaultValue={this.props.client.data.fam+" "+this.props.client.data.im+" "+this.props.client.data.otch}
              ref={this.setNewFioRef}
            />
            <input
              type='text'
              className='MobileClientBalance'
              defaultValue={this.props.client.data.balance}
              ref={this.setNewBalanceRef}
            />
            <input
              type='button'
              value='Cохранить'
              onClick={this.save}
            />
            <input
              type='button'
              value='Отмена'
              onClick={this.cancel}
            />
          </div>  
        )
    );
  }    
}

const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux

export default connect(mapStateToProps)(MobileClient);
