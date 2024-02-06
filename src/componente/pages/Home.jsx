import SideBar from "./homeComponente/SideBar.jsx";
import Slider from "./homeComponente/Slider.jsx";
import SectionSecond from "./homeComponente/sectionSecond/SectionSecond.jsx";
import BrowseCategory from "./homeComponente/sectionFird/BrowseCategory.jsx";
import BestSelling from "./homeComponente/sectionFour/BestSelling.jsx";
import BoxJbl from "./homeComponente/containerJbl/Jbl.jsx";
import "./Home.css";
export default function Home() {
  return (
    <>
      <section className="sectionFirst">
        <SideBar />
        <Slider />
      </section>
      <SectionSecond />
      <BrowseCategory />
      <BestSelling />
      <BoxJbl />
    </>
  );
}
