import React from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import List from "./pages/List";
import ListItem from "./pages/ListItem";

function App() {

  return (
      <Switch>
        <Route exact path="/:entity/:id">
          <ListItem />
        </Route>
        <Route exact path="/:entity">
          <List />
        </Route>
      </Switch>
  );
}

export default App;
