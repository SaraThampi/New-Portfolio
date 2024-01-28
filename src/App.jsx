import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Info from "./components/Info";
import HomeHorizonClip from "./components/HomeHorizonClip"
import About from "./components/About";
import Balloons from "./components/Balloons";
import "./App.css";

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <div className="main-content">
        <SideBar />
        <Info />
      </div>
      <div className="project-content">
        <About />
        <Balloons />
        <HomeHorizonClip />
      </div>
    </div>
  );
}

export default App;
