
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../redux/reducers.js';
import UsersList from '../components/UsersList';
let store=createStore(combinedReducer);
class Page_Users extends React.PureComponent {
          
  render() {
    console.log('Page_Users');

    return (
      <Provider store={store}>
        <div>
          <UsersList/>
        </div>
      </Provider>
    );
    
  }

}
    
export default Page_Users;
    