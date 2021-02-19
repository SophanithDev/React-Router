import "./App.css";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </div>
    </Router>
  );
}

export default App;
