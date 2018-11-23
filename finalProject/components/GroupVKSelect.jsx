import React from 'react';
import PropTypes from 'prop-types';
import './GroupVK.css';
import ReqAJAX from '../my_modules/ReqAJAX';
import GroupVKBase from './GroupVKBase.jsx';
import {MAIN_HOST} from '../my_modules/Settings';
import {connect} from 'react-redux';
import {group_change_status} from '../redux/groupsToSortAC';

class GroupVKSelect extends React.PureComponent {
    
  /*
  constructor(props){
    super(props);
     
    if (props.groupData['description'].length>170){
      var currentTextDescription=props.groupData['description'].slice(0,171);
      var isHaveFull=true;
    }
    else {
      var currentTextDescription=props.groupData['description'];
      var isHaveFull=false;
    }

    this.state={
      isDescriptionFull:0,
      textDescription:currentTextDescription,
      isHaveFull:isHaveFull,
   }
  }
  */

  fetchError = (errorMessage) => {
    console.error(errorMessage);
  };

  fetchSuccess = (loadedData) => {
    if (loadedData['statusOK']){
      //alert('Группа успешно добавлена');
      //console.log('Статус изменен');
      this.props.dispatch(group_change_status(this.props.groupData['id'],this.status));
    }
    else{
      //console.log('Статус не изменен');
      //alert('При добавлении на сервере возникли проблемы, возможно группы с такой ссылкой не существует');
  }

  };
  getAjaxData=new ReqAJAX(MAIN_HOST+"selectgroup/setstatus",this.fetchError,this.fetchSuccess); 
  projectId=2
  status=0
  setStatusGroup=(statusCode)=>{
    this.getAjaxData.setBody({'id_group':this.props.groupData['id'],'status_code':statusCode,'project_id':this.projectId});
    this.getAjaxData.loadData();
    
  }
  
  delFromList=()=>{
    this.setStatusGroup(1)
    this.status=1
    //1 статус убрать из списка
  }

  addToList=()=>{
    this.setStatusGroup(2)
    this.status=2
    //2 добавить в список
  }

  addGroupFull=()=>{
    this.setStatusGroup(3)
    this.status=3
    //3 статус все пользователи группы
  }  
  
  resetStatus=()=>{
    this.setStatusGroup(0)
    this.status=0
    //3 статус все пользователи группы
  }  
    render(){
      let contactsCode=[]
      for (let index in this.props.groupData['contacts']){
        let contact=this.props.groupData['contacts'][index]
        if ('user_id' in contact){
          contactsCode.push(
            <p key={contact['user_id']}>
              <input type="checkbox" defaultChecked={true}/>
              {('desc' in contact)&&(
                <span>{contact['desc']}</span>
              )}
              <a href={'https://vk.com/id'+contact['user_id']} target="_blank">{contact['user_id']}</a>
            </p>
          )  
        }
      }
      
      return (
        <div className='GroupVKSelect'>
          <GroupVKBase groupData={this.props.groupData}/> 
          <div className="GroupeContacts">{contactsCode}</div>
          <input type="button" value="Удалить из списка" onClick={this.delFromList}/>
          <input type="button" value="Добавить в выборку" onClick={this.addToList}/>
          <input type="button" value="Добавить всю группу" onClick={this.addGroupFull}/>
          <input type="button" value="Сбросить статус" onClick={this.resetStatus}/>
        </div>
      )};    
  };
  const mapStateToProps = function (state) {
  return {
    
   };
 };
  export default connect(mapStateToProps)( GroupVKSelect);
  //export default GroupVKSelect