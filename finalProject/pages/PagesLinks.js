import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';


class PagesLinks extends React.Component {
          
  render() {

    return (
      <div>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Группы</NavLink>
        <NavLink to="/users/1" className="PageLink" activeClassName="ActivePageLink">Пользователи</NavLink>
        <NavLink to="/groups" className="PageLink" activeClassName="ActivePageLink">Настройки</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    