import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Dollarbill from "./components/projects/Dollarbill";
import Artists from "./components/artists/Artists";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dollarbill" component={Dollarbill} />
          <Route path="/artists" component={Artists} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
