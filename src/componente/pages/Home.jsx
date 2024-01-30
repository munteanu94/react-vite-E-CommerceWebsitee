import SideBar from "./homeComponente/SideBar.jsx";
import Slider from "./homeComponente/Slider.jsx";
import "./Home.css";
export default function Home() {
  return (
    <>
      <section className="sectionFirst">
        <SideBar />
        <Slider />
      </section>
    </>
  );
}
