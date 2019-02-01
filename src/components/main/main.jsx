import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

const Main = ({ views }) => (
  <main>
    <Switch>
      {views.map(({ path, component }) => (
        <Route key={path} path={path} component={component} />
      ))}
    </Switch>
  </main>
);

Main.propTypes = {
  views: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};
export default Main;
