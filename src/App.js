import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import FullInfo from "./components/FullInfo";
import AppContext from "./context";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?results=6&seed=mostwanted")
      .then((res) => res.json())
      .then(({ results }) => {
        setUsers(results);
        setIsLoading(false);
      });
  }, []);

  const appState = {
    users,
    isLoading,
  };

  return (
    <AppContext.Provider value={appState}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/chel/:name">
              <FullInfo />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
