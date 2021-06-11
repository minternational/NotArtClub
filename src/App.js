import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Art from "./components/art/Art";
import Artists from "./components/artists/Artists";
import Presskit from "./components/news/Presskit";
import Dollarbill from "./components/art/Dollarbill";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div id="app" className="App">
      <Router>
        <Navigation />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/art" exact component={Art} />
          <Route path="/artists" exact component={Artists} />
          <Route path="/presskit" exact component={Presskit} />
          <Route path="/dollarbill" exact component={Dollarbill} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
