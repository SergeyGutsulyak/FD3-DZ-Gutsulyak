import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    if (this.props.colors.length>1){
    return (
      <div style={{border:"dashed 1px "+this.props.colors.pop(),padding:"10px"}}>
        <ColorFrame
          colors={this.props.colors}
        />
      </div>
    );
    }
    else{
      return (
        <div style={{border:"dashed 1px "+this.props.colors.pop(),padding:"10px"}}>

        </div>
      );
    }

  }

}

export default ColorFrame;
