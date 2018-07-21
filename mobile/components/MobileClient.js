import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    FIO:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    }),
    balance: PropTypes.number.isRequired,
    //canEdit:PropTypes.boolean.isRequired,
  };

  state = {
    FIO: this.props.FIO,
    balance: this.props.balance,
    canEdit:false,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({FIO:newProps.FIO,balance:newProps.balance,canEdit:newProps.canEdit});
  };

  render() {

    console.log("MobileClient id="+this.props.id+this.props.FIO.fam+" render");

    //const canEdit=this.state.canEdit;
    return (
        (!this.state.canEdit)?(
          <div className='MobileClient'>
            <span className='MobileClientFIO'>{this.state.FIO.fam+" "+this.state.FIO.im+" "+this.state.FIO.otch}</span>
            <span className='MobileClientBalance'>{this.state.balance}</span>
            <input
              type='button'
              value='Удалить'
            />
            <input
              type='button'
              value='Изменить'
            />
          </div>
        ) : (
          <div className='MobileClient'>
            <input
              type='text'
              className='MobileClientBalance'
              defaultValue={this.state.balance}
            />
            <input
              type='text'
              className='MobileClientFIO'
              defaultValue={this.state.FIO.fam+" "+this.state.FIO.im+" "+this.state.FIO.otch}
            />
            <input
              type='button'
              value='Cохранить'
            />
            <input
              type='button'
              value='Отмена'
            />
          </div>  
        )
    );
  }    
}


export default MobileClient;
