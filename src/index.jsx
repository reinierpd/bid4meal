// include font awesome icons and stylesheets
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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

library.add(faTrash);

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
