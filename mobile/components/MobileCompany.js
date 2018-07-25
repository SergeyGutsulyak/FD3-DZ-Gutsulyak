import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {client_add_array,client_filter_block,client_filter_all,client_filter_active,client_add} from '../redux/clientsAC';
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
*/
 
 componentWillMount(){
   console.log('Событие componentWillMount');
    this.props.dispatch(client_add_array(this.props.clientsMobile));
 }
filtrAll=()=>{
  this.props.dispatch(client_filter_all());
}

filtrBlock=()=>{
  this.props.dispatch(client_filter_block());
}

filtrActive=()=>{
  this.props.dispatch(client_filter_active());
}

addClient=()=>{
  //console.log(this.props.clients.all)
  let newKey=Math.max(...Object.keys(this.props.clients.all))+1;
    console.log(newKey)
  //console.log(Object.keys(String(newKey)));
  this.props.dispatch(client_add(String(newKey)));
}
  render() {

    console.log("MobileCompany render");
    //console.log(this.state);
    //console.log(this.props);
    
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
        <input type="button" value="Добавить" onClick={this.addClient}/>
        <input type="button" value="Все" onClick={this.filtrAll}/>
        <input type="button" value="Заблокированные" onClick={this.filtrBlock} />
        <input type="button" value="Активные" onClick={this.filtrActive}/>
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  //console.log(state);
  return {
    
    // весь раздел Redux state под именем counters будет доступен
    // данному компоненту как this.props.counters
    clients: state.clients,
  };
};

export default connect(mapStateToProps)(MobileCompany);

//export default MobileCompany;
