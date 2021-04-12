import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Subtitle from "./components/Subtitle";
import Manifesto from "./components/Manifesto";
import News from "./components/News";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Subtitle />
      <Manifesto />
      <News />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
