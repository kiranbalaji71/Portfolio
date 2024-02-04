import React, { useEffect, useState } from "react";
import "./General.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import Photo from "../../assets/images/Photo-1.png";
import AnimateText from "./AnimateText";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <div className="container homePage">
        <div className="darkShade">
          <div className="line"></div>
          <div className="main">
            <div className="textZone">
              <div className="text">
                Hi,
                <br /> I'm <span className="name">Kiran Balaji</span>
                <br />
                <AnimateText
                  letter={letterClass}
                  string={jobArray}
                  index={11}
                />
              </div>
              <div className="role">Full Stack Developer / UI/UX Developer</div>
              <div className="buttonSpace">
                <button className="coffeeButton">
                  Buy Me a Coffee <FontAwesomeIcon icon={faMugSaucer} />
                </button>
                <button className="resumeButton">
                  Download CV <FontAwesomeIcon icon={faFileLines} />
                </button>
              </div>
            </div>
            <div>
              <i className="arrowLeft" />
            </div>
            <div className="photo">
              <img src={Photo} alt="photo-showing-hi" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
