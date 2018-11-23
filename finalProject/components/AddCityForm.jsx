import React from 'react';
import {connect} from 'react-redux';
import ReqAJAX from '../my_modules/ReqAJAX';
import {MAIN_HOST} from '../my_modules/Settings';
import './ControlBox.css';

class AddCityForm extends React.PureComponent {

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };
      
    fetchSuccess = (loadedData) => {
       //console.log(loadedData);
       this.props.dispatch(groups_load(loadedData));
    };
    getAjaxData=new ReqAJAX(MAIN_HOST+"groups",this.fetchError,this.fetchSuccess);  

    componentWillMount(){
        //console.log('Событие componentWillMount');
       // this.getAjaxData.loadData();
    }
    selectCountryClick=()=>{
        
    }
render() {
    //console.log(this.props.history)
    return(
        <div className='AddCityForm' >
                <select onClick={this.selectCountryClick}>
                    <option disabled>Выберете страну</option>
                </select>
        </div>
    );
  }

}

const mapStateToProps = function (state) {
     return {
      groups: state.groups,
    };
  };
  
export default connect(mapStateToProps)(AddCityForm);