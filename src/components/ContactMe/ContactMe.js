import React, { useState, useRef, useEffect } from "react";
import "./ContactMe.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../UI/Button/Button";

const options = {
  root: null,
  threshold: 1
};

const contactBtnObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.intersectionRatio === 1) {
      entry.target.classList.add("-show");
      observer.unobserve(entry.target);
    }
  });
}, options);

const ContactMe = props => {
  const [showMenu, setShowMenu] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    if (observerTarget.current) {
      contactBtnObserver.observe(observerTarget.current);
    }
  }, []);

  const clickHandler = e => {
    setShowMenu((prevState, prevProps) => !prevState);
  };

  return (
    <div className="ContactMe">
      <Button
        ref={observerTarget}
        onClick={clickHandler}
        className="ContactMe__btn -hidden -head"
      >
        Contact Me
      </Button>
      <div className={`ContactMe__hiddenMenu ${showMenu ? "-show" : ""}`}>
        <div className="ContactMe__links">
          <a
            className="ContactMe__link -linkedin"
            href="https://www.linkedin.com/in/abe-suni-caymo-48b7ab169/"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            className="ContactMe__link -github"
            href="https://github.com/abetoots"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            className="ContactMe__link -twitter"
            href="https://twitter.com/abetoots"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </div>
        <div className="ContactMe__email">
          <span>
            <a href="mailto:caymo.abesuni@gmail.com">caymo.abesuni@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
