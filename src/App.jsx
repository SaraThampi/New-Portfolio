import Header from "./components/Header";
import "./App.css";
import MovieClip from "./components/MovieClip";
import About from "./components/About";

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <div className="main-content">
        <About />
        <MovieClip />
      </div>
    </div>
  );
}

export default App;
