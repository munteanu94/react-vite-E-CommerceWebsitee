import DeadLine from "./subComponete/Deadline.jsx";
import SliderSales from "./subComponete/SliderSales.jsx";
import ButtonAll from "./subComponete/ButtonAll.jsx";
import "./SectionSecond.css";
export default function SectionSecond() {
  return (
    <section className="containerSecond">
      <DeadLine />

      <SliderSales />
      <ButtonAll />
    </section>
  );
}
