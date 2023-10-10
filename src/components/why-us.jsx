import styled from "styled-components";
import {
  Title,
  darkGray,
  darkMainColor,
  device,
  lightGray,
  mainColor,
} from "../details";
import { advantages } from "./data/advantages";



export default function WhyUs() {
  return (
    <BlockWhy className="w-100 d-flex flex-wrap">
      <Title><span>/</span> Чому ми</Title>
      <div className="w-100 d-flex flex-wrap align-items-center justify-content-center">
        {advantages.map((item, index) => (
          <div className="d-flex flex-column justify-content-around" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </BlockWhy>
  );
}

const BlockWhy = styled.div`
  div {
    div {
      @media ${device.mobileM} {
        width: calc(100% - 1em);
      }
      @media ${device.tablet} {
        width: calc(50% - 1em);
        height: 10.5em;
      }
      @media ${device.laptop} {
        width: calc(33% - 1em);
      }
      margin: 0.5em;
      padding: 1.5em;
      background-color: ${lightGray};
      border: 1px solid #ccc;
      border-radius: 0.5em;
      transition: background-color 0.5s ease, transform 0.3s ease;

      &:hover {
        background-color: ${mainColor};
        border: 1px solid ${darkMainColor};
        transform: translateY(-10px);
        cursor: pointer;
        h3 {
          color: #fff;
          font-weight: 700;
        }
        p {
          color: ${lightGray};
        }
      }
      h3 {
        font-size: 1.2em;
        margin: 0;
        color: ${darkGray};
        font-weight: 600;
      }

      p {
        font-size: 14px;
        margin: 0;
        color: ${darkGray};
      }
    }
  }
`;
