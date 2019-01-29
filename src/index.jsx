// include font awesome icons and stylesheets
import "@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-regular.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-brands.css";
// include bootstrap javascript so that we can leverage bootstrap
// components wherever it’s handy
import "bootstrap";
// include our .scss entry that contains reference to all the other
// .scss partials throughout the app
import "./index.scss";

import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Main from "./components/main";
import Home from "./views/home";

const App = () => (
  <div>
    <Main views={[{ path: "/", component: Home }]} />
  </div>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
