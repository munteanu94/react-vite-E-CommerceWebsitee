import DeadLine from "./subComponete/Deadline.jsx";
import SliderSales from "./subComponete/SliderSales.jsx";
import ButtonAll from "./subComponete/ButtonAll.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./SectionSecond.css";
export default function SectionSecond() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="containerSecond" data-aos="fade-right">
      <DeadLine />
      <SliderSales />
      <ButtonAll />
    </section>
  );
}
