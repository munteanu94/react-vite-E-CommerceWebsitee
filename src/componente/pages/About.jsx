import Number from "./AboutComponenet/Number.jsx";
import OurStory from "./AboutComponenet/OurStory.jsx";
import SliderStaff from "./AboutComponenet/SliderStaf.jsx";
import Delivery from "./homeComponente/Delivery/Delivery.jsx";
export default function About() {
  return (
    <>
      <div className="containerAbout">
        <p
          style={{
            marginLeft: 80,
            marginTop: 80,
          }}
        >
          <span
            style={{
              color: "silver",
            }}
          >
            Home
          </span>{" "}
          / About
        </p>
        <OurStory />
        <Number />
        <SliderStaff />
        <Delivery />
      </div>
    </>
  );
}
