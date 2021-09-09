import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Converter from "./pages/Converter";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/converter/:curr" component={Converter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
