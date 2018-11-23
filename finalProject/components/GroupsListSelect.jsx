import React from 'react';
import {connect} from 'react-redux';
import {groups_load_to_sort,groups_clear_filter,groups_set_filter} from '../redux/groupsToSortAC';
import ReqAJAX from '../my_modules/ReqAJAX';
import {MAIN_HOST} from '../my_modules/Settings';

import './GroupsList.css';

import { NavLink } from 'react-router-dom';

import GroupVKSelect from './GroupVKSelect.jsx';
import LoadAnimation from './LoadAnimation.jsx'

class GroupsListSelect extends React.PureComponent {

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };
      
    fetchSuccess = (loadedData) => {
       console.log(loadedData);
       this.props.dispatch(groups_load_to_sort(loadedData));

    };
    getAjaxData=new ReqAJAX(MAIN_HOST+"selectgroup",this.fetchError,this.fetchSuccess);  

    componentDidMount(){
       console.log('Событие componentWillMount');
        this.getAjaxData.loadData();
    }
clearFilter=()=>{
    this.props.dispatch(groups_clear_filter());
}
setFilter=(nF)=>{
    this.props.dispatch(groups_set_filter(nF));
}

setFilterSelected=()=>{
    this.setFilter(2);
}

setFilterExcluded=()=>{
    this.setFilter(1);
}

setFilterSelAllUser=()=>{
    this.setFilter(3);
}
setFilterUntreated=()=>{
    this.setFilter(0);
}
render() {
   
    if ( !this.props.groupsToSort.mode.dataReady )
        return <LoadAnimation/>;

    let groupsVKCode=[];

    for (let key in this.props.groupsToSort.filtered){
        let group=this.props.groupsToSort.filtered[key];
        groupsVKCode.push(
            <GroupVKSelect 
                key={group.id}
                groupData={group}
            />
        );
    }

    let pagesLinksCode=[];
    for (let i=1;i<=this.props.groupsToSort.mode.countPages;i++){
        pagesLinksCode.push(<NavLink to={"/groups/"+i} className="PageGroupLink" key={i}>{i}</NavLink>)
    }

    return(
        <div className='GroupsList'>
            <div className="Control">
                <input type="button" value="Все" onClick={this.clearFilter}/>
                <input type="button" value="Необработанные" onClick={this.setFilterUntreated}/>
                <input type="button" value="Выбранные" onClick={this.setFilterSelected}/>
                <input type="button" value="Исключенные" onClick={this.setFilterExcluded}/>
                <input type="button" value="Группы для всех участников" onClick={this.setFilterSelAllUser}/>
            </div>
            {groupsVKCode}
        </div>
    );
  }

}

const mapStateToProps = function (state) {
     return {
        groupsToSort: state.groupsToSort,
    };
  };
  
export default connect(mapStateToProps)(GroupsListSelect);