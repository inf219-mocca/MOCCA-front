import * as React from "react";
import Coffee from "./components/coffee/Coffee";
import CoffeeTable from "./components/coffee/CoffeeList";

const App = () => {
  return (
    <React.StrictMode>
      <main>
        <header>
          <h1>MOCCAPI</h1>
        </header>
        <div className="main">
          <div>
            <Coffee />
            <CoffeeTable />
          </div>
        </div>
        <footer>Made with ❤ ️by Eivind and Sondre</footer>
      </main>
    </React.StrictMode>
  );
};

export default App;
