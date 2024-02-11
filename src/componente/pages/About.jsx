import OurStory from "./AboutComponenet/OurStory.jsx";

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
      </div>
    </>
  );
}
