import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {clientMode_change, clientData_save, client_delete} from '../redux/clientsAC';

import './UserVK.css';

class UserVK extends React.PureComponent {
  platforms={ 1:'мобильная версия',
              2:'приложение для iPhone',
              3:'приложение для iPad',
              4:'приложение для Android',
              5:'приложение для Windows Phone',
              6:'приложение для Windows 10',
              7:'полная версия сайта',
              8:'VK Mobile'}
/* Дата последнего посещения в базе не актуальна, по причине редкого обновления*/
  formatDateTime(dt) {
    var year=dt.getFullYear();
    var month=dt.getMonth()+1;
    var day=dt.getDate();
    var hours=dt.getHours();
    var minutes=dt.getMinutes();
    var seconds=dt.getSeconds();

    return str0l(day,2) + '.' + str0l(month,2) + '.' + year + ' ' + str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);

    function str0l(val,len) {
      var strVal=val.toString();
      while ( strVal.length < len )
          strVal='0'+strVal;
      return strVal;
    }
  }

  msToString(ms){
    //console.log(ms);
    var dt=new Date(ms*1000);
    //console.log(dt);
    return this.formatDateTime(dt);
  }
        
            // дополняет строку Val слева нулями до длины Len
   
/*
  static propTypes = {
    client:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      canEdit:PropTypes.boolean.isRequired,
    })
  };
  */
/*
  state = {
    FIO: this.props.FIO,
    balance: this.props.balance,
    canEdit:false,
  };
  */
/*
  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({FIO:newProps.FIO,balance:newProps.balance,canEdit:newProps.canEdit});
  };
*/
  render(){
    //console.log(this.props.userData['maiden_name']);
    return (
    (!this.props.userData['deactivated'])?(  
      <div className='userVK'>
        <div className='shortView'>
          <div className='userPhoto'>
            <a href={'https://vk.com/'+this.props.userData['domain']} target="_blank">
              <img
                src={this.props.userData['photo_100']}
              />
            </a>
          </div>
          <div className='userInfo'>
            <div className='shot'>
              <div className='userName'>
                <a href={'https://vk.com/'+this.props.userData['domain']} target="_blank">
                {this.props.userData['first_name']+' '+this.props.userData['last_name']}
                {(this.props.userData['maiden_name'])&&<span className='maidenName'>{' ('+this.props.userData['maiden_name']+') '}</span>}
                </a>
              </div>
              <div className='userId'>
                <div className='label'>
                  {'ID пользователя:'}
                </div>
                <div className='info'>
                  {this.props.userData['id']}
                </div>
              </div>
              {(this.props.userData['home_town'])&&!(this.props.userData['home_town']=='не указан')&&
              <div className='homeTown'>
                <div className='label'>
                  {'Родной город:'}
                </div>
                <div className='info'>
                  {this.props.userData['home_town']}
                </div>
              </div>}
              {(this.props.userData['occupation_name'])&&
              <div className='occupation'>
                <div className='label'>
                  {this.props.userData['occupation_type']+':'}
                </div>
                <div className='info'>
                  {this.props.userData['occupation_name']}
                </div>
              </div>}
              {(this.props.userData['site'])&&
              <div className='site'>
                <div className='label'>
                  {'Сайт:'}
                </div>
                <div className='info'>
                  <a href={this.props.userData['site']} target="_blank">{this.props.userData['site']}</a>
                </div>
              </div>}
            </div>
          <div className='fullView'>
            <div className='followersCount'>
              <div className='label'>
                {'Количество подписчиков:'}
              </div>
              <div className='info'>
                {this.props.userData['followers_count']}
              </div>
            </div>
            {(this.props.userData['bdate'])&&
              <div className='bdate'>
                <div className='label'>
                  {'Дата рождения:'}
                </div>
                <div className='info'>
                  {this.props.userData['bdate']}
                </div>
              </div>}
            <div className='lastSeen'>
              <div className='label'>
                {'Последнее посещение:'}
              </div>
              <div className='info'>
                {this.msToString(this.props.userData['last_seen_time'])+' с платформы: '+this.platforms[this.props.userData['last_seen_platform']]}
              </div>
            </div>
            {(this.props.userData['home_phone'])&&
            <div className='homePhone'>
              <div className='label'>
                {'Домашний телефон:'}
              </div>
              <div className='info'>
                {this.props.userData['home_phone']}
              </div>
            </div>}
            {(this.props.userData['mobile_phone'])&&
            <div className='mobilePhone'>
              <div className='label'>
                {'Мобильный телефон:'}
              </div>
              <div className='info'>
                {this.props.userData['mobile_phone']}
              </div>
            </div>}
          <div className='socialNetworks'>
            <p className='facebook'><span className='socialIcon'></span> {this.props.userData['facebook']}</p>
            <p className='skype'><span className='socialIcon'></span>{this.props.userData['skype']}</p>
            <p className='twitter'><span className='socialIcon'></span>{this.props.userData['twitter']}</p>
            <p className='instagram'><span className='socialIcon'></span>{this.props.userData['instagram']}</p>
          </div>
        </div>
      </div>
      </div>
      </div>):(
      <div className='userVK'>Страница пользователя удалена</div>
      )
    )};    
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux

//export default connect(mapStateToProps)(MobileClient);

export default UserVK