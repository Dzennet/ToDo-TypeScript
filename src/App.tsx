import React from "react";
import Navbar from "./components/Navbar";
import ToDoPage from "./pages/ToDoPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={ToDoPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
