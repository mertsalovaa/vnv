import styled from "styled-components";

export const mainColor = "#00a3e0";
export const darkMainColor = "#00719a";
export const darkGray = "#474747";
export const lightGray = "#f1f1f1";

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  color: ${darkGray};
  font-size: 1.4em;
  font-stretch: expanded;
  margin-left: 0.5em;
  padding-top: 4.5em;
  padding-bottom: 0.5em;
  span {
    font-weight: 900;
    color: #000;
    margin-right: 5px;
  }
`;

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const MainButton = styled.button`
  background-color: #fff;
  color: ${mainColor};
  border: 2px solid ${mainColor};
  border-radius: 0.5em;
  padding: 0.5em 2em;
  font-size: 1.1em;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.8ms ease;
  position: relative;
  font-size: 1.2em;
  font-weight: bolder;
  display: flex;
  align-items: center;
  margin: 0.15em;
  span {
    z-index: 1;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: ${darkMainColor};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.8s ease;
  }
  &:hover::before {
    width: 120%;
    border: 2px solid ${mainColor};
    padding-top: 120%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
