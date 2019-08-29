import React from "react";

import Home from "./pages/index";

import Blog from "./components/pages/Blog";

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Home} />
        <Route path="/artist" component={} />
        <Route exact path="/about" component={} />
    </div>
    </Router>
  );
}

export default App;