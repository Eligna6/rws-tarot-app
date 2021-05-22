import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../assets/styles/App.scss";
import Cards from "../containers/Cards";
import Favorites from "../containers/Favorites";
import Layout from "../components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/favorites" component={Favorites}/>
        <Route exact path="/" component={Cards}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
