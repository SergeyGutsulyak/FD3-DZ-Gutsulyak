import React from 'react';
import PropTypes from 'prop-types';
import ReqAJAX from '../../my_modules/ReqAJAX';

//import './GroupVK.css';
class SelectAJAX extends React.PureComponent {
    
    static propTypes = {
      textInvitation:PropTypes.string.isRequired,
      url:PropTypes.string.isRequired,
    };
    constructor(props){
      super(props);
      this.getAjaxData.loadData();
    }
    state={
      isReady:false,
      data:[],
      textInvitation:'Загрузка данных',
    }
  fetchError = (errorMessage) => {
    console.error(errorMessage);
  };
    
  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({data:loadedData['data'],textInvitation:this.props.textInvitation})
  };

  getAjaxData=new ReqAJAX(this.props.url,this.fetchError,this.fetchSuccess);

  render(){
    // console.log(this.state.data);
    let options=this.state.data.map(item=>{
      // console.log(item.id);
      // console.log(item.title);
      return <option value={item.id} key={item.id}>{item.title}</option>
    })
    // console.log(options);
    
    return (
      <select>
        <option value='0' selected>{this.props.textInvitation}</option>
        {options}
      </select>
    )};    
  };
  
  export default SelectAJAX