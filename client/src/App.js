
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/index";
import Blog from "./pages/blog";
import About from "./pages/about";

function App() {
  return (
    <Router>
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/artist" component={Blog} />
        <Route exact path="/about" component={About} />
        
    </div>
    </Router>

  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;