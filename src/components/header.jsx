import styled from "styled-components";
import logo from "../images/vnv-logo.png";
import { useEffect } from "react";
import { MainButton, darkGray, darkMainColor, device, mainColor } from "../details";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Header() {
  const windowSize = useWindowSize();
  useEffect(() => {
    const container = document.querySelector(".balloons");
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
    function handleResize() {
      // setWindowSize({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    function createBalloon() {
      const balloon = document.createElement("div");
      balloon.className = "balloon";

      const size = getRandomNumber(20, 100);
      balloon.style.width = `${size}px`;
      balloon.style.height = `${size}px`;

      const color = getRandomNumber(0, 1) < 0.5 ? "white" : "dark";
      balloon.classList.add(`balloon-${color}`);
      let startX = 0;
      if (windowSize.width <= 1070) {
        if(windowSize.width <= 572) {
          startX = getRandomNumber(10, 70);          
        }
        else {
          startX = getRandomNumber(10, 75);
        }
      }
      else {
        startX = getRandomNumber(10, 90);
      }
      // const
      balloon.style.left = `${startX}vw`;
      balloon.style.top = "35vh";

      container.appendChild(balloon);
      balloon.animate(
        [
          { transform: `translateY(0)`, opacity: 1 },
          { transform: `translateY(-120%)`, opacity: 0 },
        ],
        {
          duration: getRandomNumber(5000, 10000),
          easing: "linear",
          fill: "forwards",
        }
      );
      balloon.addEventListener("animationend", () => {
        container.removeChild(balloon);
      });
    }
    const balloonGenerator = setInterval(createBalloon, 150);
    return () => {
      clearInterval(balloonGenerator);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderDiv className="w-100 d-flex flex-column align-items-start">
      <img src={logo} alt="logo" />
      <div className="balloons">
        <p className="">
          Easy, quality, IT -<span>w</span>inning <span>solutions </span>
          for your business
        </p>
        <MainButton>
          <span>Замовити</span>
        </MainButton>
      </div>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  height: 55vh !important;
  overflow: hidden !important;

  img {
    width: 10em;
  }
  
  .balloons {
    overflow: hidden !important;
    .balloon {
      position: absolute;
      border-radius: 50%;
      z-index: -1000;
      animation-timing-function: linear;
    }
    .balloon-white {
      background-color: #fff;
    }
    .balloon-dark {
      background-color: ${darkGray};
    }
  }
  p {
    font-size: 2em;
    z-index: 1;
    span {
      font-weight: bold;
    }
  }
`;