import React from 'react';
import PropTypes from 'prop-types';
import './GroupVK.css';
import {msToDateTime} from '../my_modules/fun';
import { NavLink } from 'react-router-dom';
import GroupVKBase from './GroupVKBase.jsx';
class GroupVKScan extends React.PureComponent {
    
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


  showDescription=()=>{
    this.setState({isDescriptionFull:1,textDescription:this.props.groupData['description']})
  }
  hideDescription=()=>{
    this.setState({isDescriptionFull:0,textDescription:this.props.groupData['description'].slice(0,151)})
  }
    render(){
      //console.log(this.props.userData['maiden_name']);
      return (
        
        <div className='groupVK'>
                <GroupVKBase groupData={this.props.groupData}/> 
                <div className='startScan'>
                    {'Начало сканирования: '}
                    <span className='scanTime'>
                        {msToDateTime(this.props.groupData['start_scan_time'])}
                    </span>
                </div>
                <div className='periodScan'>
                        {'Период сканирования: '}
                        {this.props.groupData['period_scan']/60+' ч.'}
                </div>
                <div className='lastScan'>
                    {'Последнее сканирование: '}
                    <span className='scanTime'>
                        {msToDateTime(this.props.groupData['last_scan'])}
                    </span>
                </div>
                <div className='status'>
                    {(this.props.groupData['on_scan'])?
                        (<span className='scanON'>Сканирование включено</span>):
                        (<span className='scanOFF'>Сканирование отключено</span>)
                    }
                </div>
                <div>
                  <NavLink to={"/users/"+this.props.groupData['id']+'/1'} className="PageUserLink" key={this.props.groupData['id']}>{'Посмотреть пользователей'}</NavLink>
                </div>
        </div>
      )};    
  };
  
  export default GroupVKScan