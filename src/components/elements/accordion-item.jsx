import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { mainColor } from "../../details";
import styled from "styled-components";

export function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  const toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? `${mainColor}` : "#000",
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "10vh" },
    to: { opacity: "1", maxHeight: open ? "30vh" : "10vh" },
    config: { duration: "300" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? `${mainColor}` : `#000`
    },
    config: { duration: "120" },
  });

  return (
    <AnimatedItem key={props.id} className="w-100" style={openAnimation}>
      <div onClick={toggleHandler}>
        <h4 style={styles.accordionTitle}>{props.question}</h4>
        <animated.i className="fa-solid fa-chevron-down" style={iconAnimation}></animated.i>
        {/* <animated.img src={open ? arrow_target : arrow } alt="arrow" style={iconAnimation} /> */}
      </div>
      <p>{props.answer}</p>
    </AnimatedItem>
  );
}

const AnimatedItem = styled(animated.div)`
  padding: 2.1em 0;
  border-bottom: 1px solid #c9c9c9;
  color: #000;
  overflow: hidden;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      transition: 0.2s ease-in-out;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    i {
      transition: 0.2s ease-in-out;
      transform-origin: center;
      margin-bottom: 10px;
      width: 1em;
    }
    &:hover {
      h4,
      i {
        color: ${mainColor} !important;
      }
    }
  }
  p {
    margin: 5px;
  }
`;

//   .accordion__header:hover i {
//     color: #10d6f5;
//   }

//   .accordion__content {
//
//   }

//   @media (min-width: 900px) {
//     .accordion__item {
//       width: 40%;
//     }
//   }

//   @media (max-width: 600px) {
//     h1 {
//       font-size: 30px;
//     }
//     .accordion__item {
//       width: 80%;
//     }
//   }
