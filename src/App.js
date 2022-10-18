import "./App.css";
import Bgimg from "./components/Bgimg.js";
import Textsection from "./components/Textsection.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="app">
      <div className="img">
        <Bgimg />
      </div>
      <div className="wrapp">
        <Textsection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
