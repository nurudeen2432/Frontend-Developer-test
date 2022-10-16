import Navbar from "./components/Navbar";
import Discover from "./components/Discover";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Discover />
      <Search />
    </div>
  );
}

export default App;
