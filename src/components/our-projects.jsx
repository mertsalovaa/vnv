import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import src1 from "../images/our-projects/1.png";
import src2 from "../images/our-projects/2.png";
import src3 from "../images/our-projects/3.png";
// import video from "../images/video.mp4";
import { Title, device } from "../details";
import { animated, useSpring } from "react-spring";

// function isElementVisible(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// Attach the scroll event listener to the window or container

export default function OurProjects() {
  const images = [
    {
      src: src1,
      alt: "photo 1",
      url: "https://volstinyproduction.com/",
      caption: "photo",
    },
    {
      src: src2,
      alt: "photo 2",
      url: "https://volstinyproduction.com/",
      caption: "photo",
    },
    {
      src: src3,
      alt: "photo 3",
      url: "https://volstinyproduction.com/",
      caption: "photo",
    },
  ];
  const [hovered, setHovered] = useState(false);
  const itemSpring = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  // const [isPlayerVisible, setPlayerVisibility] = useState(false);
  // const [playing, setPlaying] = useState(false);
  // const playerRef = useRef(null); // Create a ref using useRef
  // const play = () => setPlaying(true);
  // const pause = () => setPlaying(false);
  // useEffect(() => {
  //   function checkElementVisibility() {
  //     const element = document.getElementById("video");
  //     console.log(playerRef.current);
  //     if (isElementVisible(element)) {
  //       setPlayerVisibility(true);
  //       play();
  //       // isPlayerVisible ? setPlaying(true) : setPlaying(false);
  //       console.log("Element is visible");
  //     } else {
  //       // Element is not visible, do something else
  //       pause();
  //       setPlayerVisibility(false);
  //       console.log("Element is not visible");
  //     }
  //   }
  //   window.addEventListener("scroll", checkElementVisibility);
  //   return () => checkElementVisibility();
  // }, []);

  // const handlePlay = () => {
  //   setPlayerVisibility(true);
  // };

  return (
    <PortfolioContainer>
      <Title>
        <span>/</span> Наші проекти
      </Title>
      <MediaGallery className="d-flex flex-column align-items-center">
        {images.map((item) => (
          <MediaItem
            key={item.alt}
            style={itemSpring}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => window.open(item.url, "_blank")}
          >
            <img src={item.src} alt={item.alt} />
          </MediaItem>
        ))}
      </MediaGallery>
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled.div`
  width: 100%;
`;

const MediaGallery = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MediaItem = styled(animated.div)`
  margin: 1.5em 1em;
  overflow: hidden;
  border-radius: 1em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 1em;
  }

  iframe {
    max-width: 100%;
    border-radius: 1em;
  }
`;
