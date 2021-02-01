import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import List from "./pages/List";
import ListItem from "./pages/ListItem";

function App() {

  return (
      <Switch>
        <Route path="/:entity/:id">
          <ListItem />
        </Route>
        <Route path="/:entity/">
          <List />
        </Route>
        <Route exact path="/">
          <Redirect to="/planets/?page=1" />
        </Route>
      </Switch>
  );
}

export default App;

