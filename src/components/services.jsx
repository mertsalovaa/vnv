import styled from "styled-components";
import { MainButton, Title, device } from "../details";
import { useCallback, useEffect, useState } from "react";
import { servicesArr } from "./data/services";



function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

export default function Services() {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= servicesArr.length - 1) {
      setIndexes({
        previousIndex: servicesArr.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === servicesArr.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <ServBlock>
      <Title>
        <span>/</span> Послуги
      </Title>
      <CardCarousel>
        {servicesArr.map((card, index) => (
          <li
            key={card.id}
            className={`d-flex flex-column justify-content-between align-items-start ${determineClasses(
              indexes,
              index
            )}`}
          >
            <span>
              <h2>{card.title}</h2>
              <p>{card.copy}</p>
            </span>
            <MainButton>
              <span>Хочу</span>
            </MainButton>
          </li>
        ))}
      </CardCarousel>
    </ServBlock>
  );
}

const CardCarousel = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 60%;
  align-items: center;
  position: relative;
  li {
    background: #ffffff;
    border-radius: 0.6em;
    border: 1px solid #eeeeee;
    padding: 2em;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
    width: calc(60% - 1em);
    height: 100%;
    transition: all 0.75s ease;
    opacity: 0;
    position: absolute;
    transform: scale(0.85) translateY(50px);
    
    @media ${device.mobileM} {
      width: calc(80% - 1em);
      height: 43vh;
    }
    @media ${device.tablet} {
      height: 100% !important;
      width: calc(80% - 1em);
      /* height: 10.5em; */
    }
    @media ${device.laptop} {
      width: calc(55% - 1em);
    }
    span {
      h2 {
        line-height: 1.5;
        font-size: 1.6em;
        margin: 0;
      }
      p {
        margin: 0;
        line-height: 1.5;
      }
    }
  }
  .active {
    opacity: 1;
    transform: scale(1) translateY(0);
    box-shadow: 0 30px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .next {
    opacity: 1;
    z-index: 0;
  }
  .prev {
    transform: scale(1.1) translateY(-50px);
    z-index: 2;
    opacity: 0;
    visibility: hidden;
  }
`;

const ServBlock = styled.div`
  height: 35vh;
  @media ${device.mobileM} {
    height: 70vh;
  }
`;
