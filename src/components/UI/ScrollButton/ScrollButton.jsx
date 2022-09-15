import { useState } from "react";

import "./ScrollButton.scss";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState();

  const checkVisibility = () => {
    const scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition > 500) {
      setIsVisible(true);
    } else if (scrollPosition <= 500) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", checkVisibility);

  return (
    <>
      {isVisible && (
        <div className="scroll-button" onClick={scrollToTop}>
          <i className="fa-solid fa-angle-up scroll-button__icon"></i>
        </div>
      )}
    </>
  );
};

export default ScrollButton;
