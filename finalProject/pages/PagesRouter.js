import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

//import Page_About from './Page_About';
import Page_Users from './Page_Users';
//import Page_Groups from './Page_Groups';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        {/* <Route path="/" exact component={Page_About} /> */}
        <Route path="/users" component={Page_Users} />
        {/* <Route path="/groups" component={Page_Groups} /> */}
      </div>
    );
    
  }

}
    
export default PagesRouter;
    