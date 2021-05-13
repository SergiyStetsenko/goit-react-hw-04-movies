import React from 'react';
import routes from '../service/routes';
import { NavLink } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <div>
      <h1>404-page not found</h1>
      <NavLink to={`${routes.home}`}>go to home</NavLink>
    </div>
  );
};

export default NotFoundView;