
import React from 'react';

//import {connect} from 'react-redux';
import GroupsListSelect from '../components/GroupsListSelect.jsx';

class Page_Groups_Select extends React.PureComponent {

  render() {
    console.log('render PageGroups');
        
    //page={this.props.match.params.page}
    return (
          <GroupsListSelect />
    );
  }
}
/*
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};


export default connect(mapStateToProps)(Page_Groups);
*/
export default Page_Groups_Select;    
