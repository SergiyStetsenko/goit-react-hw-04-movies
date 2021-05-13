import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../service/routes.js';


const Navigation = () => {
  return (
    <nav>
      <ul >
        <li >
          <NavLink to={routes.home}>Home </NavLink>
        </li>
        <li >
          <NavLink to={routes.movies}>Movies </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;