import React from 'react';
//import {connect} from 'react-redux';
import ReqAJAX from '../my_modules/ReqAJAX';
import SelectAJAX from './base/SelectAJAX.jsx';
import GroupCheckbox from './base/GroupCheckbox.jsx';
import {MAIN_HOST} from '../my_modules/Settings';
//import './ControlBox.css';

//import { NavLink } from 'react-router-dom';

//import FormAddGroup from './FormAddGroup';

class SearchUsersForm extends React.PureComponent {

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };
      
    fetchSuccess = (loadedData) => {
       //console.log(loadedData);
       //this.props.dispatch(groups_load(loadedData));
    };
    getAjaxData=new ReqAJAX(MAIN_HOST+"searh/users",this.fetchError,this.fetchSuccess);  

render() {
    //console.log(this.props.history)
    return(
        <div className='SearchGroupForm'>
            <label>Строка запроса:
                <input type="text"/>
            </label>
            <div>
                <span>Сортировка результатов:</span>
                <label><input type="radio" name="sort_rez"value="1" checked/>По дате регистрации</label>
                <label><input type="radio" name="sort_rez" value="0"/>По популярности</label>
            </div>
            <label >Смещениение:
                <input type="number" defaultValue="0"/>
            </label>
            <label> Количество выводимых пользователей:
                <input type="number" defaultValue="1000"/>
            </label>
            <label>
                <textarea defaultValue='photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50,
                photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max,
                photo_max_orig, online, lists, domain, has_mobile, contacts, site, education,
                universities, schools, status, last_seen, followers_count, common_count, occupation,
                nickname, relatives, relation, personal, connections, exports, wall_comments, activities,
                 interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, 
                 can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, 
                 is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, 
                 friend_status, career, military, blacklisted, blacklisted_by_me '>

                </textarea>
                <label><input type="checkbox" defaultChecked/>Получить только основные параметры</label>
            </label>
            <label>Страна:
                <SelectAJAX url={MAIN_HOST+'get/country'} textInvitation='Выберите срану'/>
            </label>
        </div>
    );
  }

}
/*
const mapStateToProps = function (state) {
     return {
      groups: state.groups,
    };
  };
  
export default connect(mapStateToProps)(GroupsList);
*/

export default SearchUsersForm;