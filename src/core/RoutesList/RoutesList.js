import React from 'react';
import PropTypes from 'prop-types';

import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const AsyncNotFound = loadable(() => import('../../components/NotFound404/NotFound404'));

const RoutesList = (props) => {
  return (
    <>
      {/* For a given set of routes, load only one of each */}
      <Routes>
        {props.routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component ? <route.component /> : <AsyncNotFound />}
          />
        ))}
        {/* Handle our 404 case. Must be defined last */}
        <Route path="*" element={<AsyncNotFound />} />
      </Routes>
    </>
  );
};

RoutesList.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.exact({
      path: PropTypes.string,
      exact: PropTypes.bool,
      component: PropTypes.elementType,
      label: PropTypes.string,
    }).isRequired
  ),
};

export default RoutesList;
