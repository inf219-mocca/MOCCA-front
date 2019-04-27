import * as React from "react";
import Coffee from "./components/coffee/Coffee";
import CoffeeTable from "./components/coffee/CoffeeList";
import Nav from "./components/containers/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="container">
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={Coffee} />
              <Route path="/history" component={CoffeeTable} />
            </Switch>
          </main>
          <footer>Made with ❤ ️by Eivind and Sondre</footer>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
