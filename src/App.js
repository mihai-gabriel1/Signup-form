import "./App.css";
import Bgimg from "./Bgimg";
import Textsection from "./Textsection";
import Footer from "./Footer";

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
