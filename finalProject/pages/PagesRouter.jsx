import React from 'react';
import PropTypes from 'prop-types';
import { Router,Route} from 'react-router-dom';
//import { syncHistoryWithStore, routerReducer,hashHistory } from 'react-router-redux';

//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import combinedReducer from '../redux/reducers.js';

//let store=createStore(combinedReducer);

//const history = syncHistoryWithStore(hashHistory, store);

//import Page_About from './Page_About';
import Page_Users from './Page_Users.jsx';
import Page_Groups from './Page_Groups.jsx';
import Page_Groups_Select from './Page_Groups_Select.jsx';
import Page_Control from './Page_Control.jsx';
import Page_SearchUsers from './Page_SearchUsers.jsx';

class PagesRouter extends React.Component {
          
  render() {

    return (
      // <Provider store={store}>
        <div>
          {/* <Router history={history}> */}
            <Route path="/" exact component={Page_Groups} /> 
            <Route path="/users/:idGroup/:page" component={Page_Users} />
            <Route path="/control" component={Page_Control} />
            <Route path="/search_users" component={Page_SearchUsers} /> 
            <Route path="/groups_select" component={Page_Groups_Select} /> 
          {/* </Router> */}
        </div>
      // </Provider>
    );
  }

}
    
export default PagesRouter;
    