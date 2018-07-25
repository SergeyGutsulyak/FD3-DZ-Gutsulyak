import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {client_add_array} from '../redux/clientsAC';
import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {
/*
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
*/
 /* setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
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
  */

 componentWillMount(){
   console.log('Событие componentWillMount');
    this.props.dispatch(client_add_array(this.props.clientsMobile));
 }


  render() {

    console.log("MobileCompany render");
    //console.log(this.state);
    console.log(this.props);
    
    var clientsCode=[];
    var clientsHash=this.props.clients.crop;
    for (var keyEl in clientsHash){
      clientsCode.push( <MobileClient key={keyEl} client={clientsHash[keyEl]}/>);
    }
    /*
    this.props.clients.crop.map( client => {
        //let FIO={fam:client.fam,im:client.im,otch:client.otch};
        return <MobileClient key={client.id} client={client}/>;
      }
    );
    */
    return (
      <div className='MobileCompany'>
        <div className='MobileCompanyClients'>
          {clientsCode} 
        </div>
        <input type="button" value="Добавить" />
        <input type="button" value="Все" />
        <input type="button" value="Заблокированные" />
        <input type="button" value="Активные" />
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  console.log(state);
  return {
    
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    clients: state.clients,
  };
};

export default connect(mapStateToProps)(MobileCompany);

//export default MobileCompany;
