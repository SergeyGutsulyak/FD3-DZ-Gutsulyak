import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../redux/reducers.js';
import MobileCompany from '../components/MobileCompany';

let store=createStore(combinedReducer);

let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:-250}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  {id:107, fam:"Павлов", im:"Павел", otch:"Павлович", balance:200}, 
  {id:109, fam:"Никитин", im:"Никита", otch:"Никитович", balance:250}, 
  {id:111, fam:"Сазонов", im:"Сазон", otch:"Сазонович", balance:-180},
  {id:113, fam:"Евгеньев", im:"Евгений", otch:"Евгеньевич", balance:220},
];

class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
          <div>
              <h1>Клиенты компании</h1>
              <MobileCompany clientsMobile={clientsArr} />
          </div>
      </Provider>
    );

  }

}

export default MainPage;
