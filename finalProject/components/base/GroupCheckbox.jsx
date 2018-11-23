import React from 'react';
import PropTypes from 'prop-types';

class GroupCheckbox extends React.PureComponent {
    static propTypes = {
        dataEls:PropTypes.arrayOf(
            PropTypes.shape({
                val:PropTypes.string.isRequired,
                text:PropTypes.string.isRequired,
                isChecked:PropTypes.bool.isRequired,
            })
        ).isRequired,
    };  

    render(){
    
    let inputArray=this.props.dataEls.map(item=>{
      return <label><input type='checkbox' value={item.val} defaultChecked={item.isChecked} key={item.val}/>{item.text}</label>
    })
    
    return (
      <div className='GroupCheckbox'>
        {inputArray}
      </div>
    )};    
  };
  
  export default GroupCheckbox