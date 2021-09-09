import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Converter from "./pages/Converter/Converter";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:curr" component={Converter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
