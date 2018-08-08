import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';
import {connect} from 'react-redux';
import {users_load} from '../redux/usersAC';

import { NavLink } from 'react-router-dom';

import UserVK from './UserVK';

class UsersList extends React.PureComponent {

    fetchError = (errorMessage) => {
        console.error(showStr);
    };
      
    fetchSuccess = (loadedData) => {
       console.log(loadedData);
       this.props.dispatch(users_load(loadedData));
    };
      
    loadData = () => {
      
        isoFetch("http://localhost:5000/users", {
            method: 'post',
            headers: {
                "Accept": "application/json",
            },
        })
            .then( (response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err=new Error("fetch error " + response.status);
                    Err.userMessage="Ошибка связи";
                    throw Err; // дальше по цепочке пойдёт отвергнутый промис
                }
                else
                    return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
            })
            .then( (data) => {
                try {
                    this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
                }
                catch ( error ){
                    this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
                }
            })
            .catch( (error) => {
                this.fetchError(error.userMessage||error.message);
            })
        ;
      
      };
      

componentWillMount(){
   console.log('Событие componentWillMount');
   this.loadData();
}

render() {
    console.log(this.props);
    if ( !this.props.users.mode.dataReady )
        return <div>загрузка данных...</div>;

    let usersVKCode=[];

    for (var key in this.props.users.all){
        let user=this.props.users.all[key];
        usersVKCode.push(
            <UserVK 
                key={key}
                userData={user}
            />
        );
    }

    return(
        <div className='UsersList'>
            {usersVKCode}
        </div>
    );
  }

}


const mapStateToProps = function (state) {
    //console.log(state);
    return {
      
      // весь раздел Redux state под именем counters будет доступен
      // данному компоненту как this.props.counters
      users: state.users,
    };
  };
  
export default connect(mapStateToProps)(UsersList);

