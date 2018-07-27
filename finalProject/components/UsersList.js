import React from 'react';
import {default as isoFetch} from 'isomorphic-fetch';

import UserVK from './UserVK';

//import './MobileCompany.css';

class UsersList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.loadData();
  }

  state = {
    dataReady: false,
    users: {},
  };

  fetchError = (errorMessage) => {
    //console.error(showStr);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    //console.log(JSON.parse(loadedData));
    this.setState({
      dataReady:true,
      users:loadedData.data,
    });
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

  render() {

    if ( !this.state.dataReady )
        return <div>загрузка данных...</div>;

    let usersVKCode=[];

    for (var key in this.state.users){
        let user=this.state.users[key];
        usersVKCode.push(
            <UserVK 
                key={user['id']}
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

export default UsersList;
