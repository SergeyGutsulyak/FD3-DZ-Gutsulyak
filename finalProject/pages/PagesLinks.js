import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/users" className="PageLink" activeClassName="ActivePageLink">Пользователи</NavLink>
        <NavLink to="/groups" className="PageLink" activeClassName="ActivePageLink">Группы</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    