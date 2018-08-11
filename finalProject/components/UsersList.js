import React from 'react';
import {connect} from 'react-redux';
import {users_load,change_users_page} from '../redux/usersAC';
import ReqAJAX from '../my_modules/ReqAJAX';

import './UsersList.css';

import { NavLink } from 'react-router-dom';

import UserVK from './UserVK';

class UsersList extends React.PureComponent {

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };
      
    fetchSuccess = (loadedData) => {
       //console.log(loadedData);
       this.props.dispatch(users_load(loadedData));
    };
    getAjaxData=new ReqAJAX("http://localhost:5000/users",this.fetchError,this.fetchSuccess);  

componentWillReceiveProps(newProps){
    console.log('Событие componentWillUpdate UsersList');
    //console.log(newProps.page);
    //console.log(newProps.users.mode.curPage);
    if (newProps.page!=newProps.users.mode.curPage){
        this.props.dispatch(change_users_page(newProps.page));
    }
}

componentWillMount(){
   console.log('Событие componentWillMount');
   //this.loadData();
   this.getAjaxData.loadData();
}
/*
componentWillReceiveProps(){
   console.log('Событие componentWillReceiveProps');
   //this.props.dispatch(change_users_page(this.props.match.params.page));

}
*/
render() {
    console.log('Номер страницы при рендере UsersList:'+this.props.page);
    if ( !this.props.users.mode.dataReady )
        return <div>загрузка данных...</div>;

    let usersVKCode=[];

    for (let key in this.props.users.crop){
        let user=this.props.users.crop[key];
        usersVKCode.push(
            <UserVK 
                key={key}
                userData={user}
            />
        );
    }

    let pagesLinksCode=[];
    for (let i=1;i<=this.props.users.mode.countPages;i++){
        pagesLinksCode.push(<NavLink to={"/users/"+i} className="PageUserLink" key={i}>{i}</NavLink>)
    }

    return(
        <div className='UsersList'>
            <div className="LinksPages">
                {pagesLinksCode}
            </div>
            {usersVKCode}
            <div className="LinksPages">
                {pagesLinksCode}
            </div>
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

