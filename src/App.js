import "./App.css";
import Bgimg from "./Bgimg";
import Textsection from "./Textsection";

function App() {
  return (
    <div className="container">
      <div className="image">
        <Bgimg />
      </div>
      <div className="text-section">
        <Textsection />
      </div>
    </div>
  );
}

export default App;
