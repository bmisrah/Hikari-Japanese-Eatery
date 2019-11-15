import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import MenuPage from "./pages/MenuPage";
import ResPage from "./pages/ResPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/StoryPage" component={StoryPage}></Route>
        <Route path="/MenuPage" component={MenuPage}></Route>
        <Route path="/ResPage" component={ResPage}></Route>
        <Route path="/ContactPage" component={ContactPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
