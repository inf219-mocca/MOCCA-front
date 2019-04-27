import * as React from "react";
import Coffee from "./components/coffee/Coffee";
import CoffeeTable from "./components/coffee/CoffeeList";
import Nav from "./components/containers/Nav";

const App = () => {
  return (
    <React.StrictMode>
      <div className="container">
        <Nav />
        <main>
          <Coffee />
          <CoffeeTable />
        </main>
        <footer>Made with ❤ ️by Eivind and Sondre</footer>
      </div>
    </React.StrictMode>
  );
};

export default App;
