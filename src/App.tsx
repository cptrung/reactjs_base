import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MasterContainer from "./containers/master.container";

export const App = () => {
  return (
    <Router>
      <MasterContainer />
    </Router>
  );
};
export default App;
