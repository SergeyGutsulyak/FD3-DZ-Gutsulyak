import React from 'react';
import PropTypes from 'prop-types';
import './FormAddGroup.css';
class FormAddGroup extends React.PureComponent {
    
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
    render(){
      //console.log(this.props.userData['maiden_name']);
      return (
        <div className='FormAddGroup'>
            {'Добавить группу:'}
            <input type='text'></input>
            <input type='button'>Добавить</input>
        </div>
      )};    
  };
  
  export default FormAddGroup