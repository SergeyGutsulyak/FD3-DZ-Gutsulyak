import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../redux/reducers.js';
import UsersList from '../components/UsersList';



let store=createStore(combinedReducer);

class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
          <div>
              <UsersList/>
          </div>
      </Provider>
    );

  }

}

export default MainPage;
