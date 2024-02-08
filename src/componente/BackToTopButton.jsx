import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

export default function BackToTopButton() {
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backTop && (
        <div
          style={{
            width: 40,
            height: 40,
            background: "whitesmoke",
            borderRadius: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 25,
            position: "fixed",
            right: 80,
            bottom: 380,
            zIndex: 10000,
            cursor: "pointer",
          }}
          onClick={scrollUp}
        >
          <IoMdArrowUp />
        </div>
      )}
    </>
  );
}
