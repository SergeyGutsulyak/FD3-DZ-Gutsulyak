﻿import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

 /* setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  */
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client => {
        let FIO={fam:client.fam,im:client.im,otch:client.otch};
        return <MobileClient key={client.id} id={client.id} FIO={FIO} balance={client.balance} />;
      }
    );

    return (
      <div className='MobileCompany'>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Добавить" onClick={this.setBalance1} />
        <input type="button" value="Все" onClick={this.setBalance1} />
        <input type="button" value="Заблокированные" onClick={this.setBalance2} />
        <input type="button" value="Активные" onClick={this.setBalance2} />
      </div>
    )
    ;

  }

}

export default MobileCompany;
