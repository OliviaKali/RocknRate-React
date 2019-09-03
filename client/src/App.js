
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/index";
import Blog from "./pages/blog";
import About from "./pages/about";
import PrimarySearchAppBar from "./components/NavBar/navbar";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/artist" component={Blog} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>

  );
}

// ReactDOM.render(<App />, document.querySelector('#app'));

export default App;