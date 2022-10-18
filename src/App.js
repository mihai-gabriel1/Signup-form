import "./App.css";
import Bgimg from "./Bgimg";
import Textsection from "./Textsection";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="image">
        <Bgimg />
      </div>
      <div className="text-section">
        <div className="text-container">
          <Textsection />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
