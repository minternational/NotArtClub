import "./styles/styles.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Dollarbill from "./components/project/Dollarbill";
import Art from "./components/art/Art";
import Artists from "./components/artists/Artists";
import Contact from "./components/contact/Contact";
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
            <Route path="/news" component={News} />
            <Route path="/dollarbill" component={Dollarbill} />
            <Route path="/art" component={Art} />
            <Route path="/artists" component={Artists} />
            <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
