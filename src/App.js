import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exect={true} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
