import React from 'react';
import { Link, Redirect, Route, Switch, useParams } from 'react-router-dom';
import List from "./pages/List";
import ListItem from "./pages/ListItem";

function App() {

  return (
      <Switch>
        <Route path="/:entity/:id">
          <ListItem />
        </Route>
        <Route exact path="/:entity">
          <List />
        </Route>
        <Route path="/">
          <Redirect to="/planets" />
        </Route>
      </Switch>
  );
}

export default App;
