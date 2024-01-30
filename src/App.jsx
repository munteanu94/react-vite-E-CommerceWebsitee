import "./App.css";
import Header from "./componente/Header/Header.jsx";
import Footer from "./componente/footer/footer.jsx";
import SideBar from "./componente/pages/homeComponente/SideBar.jsx";
import Home from "./componente/pages/Home.jsx";

import "./App.css";
function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
