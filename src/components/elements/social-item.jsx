import styled from "styled-components";
import { darkGray, mainColor } from "../../details";
import { useState } from "react";

export default function SocialItem(props) {
  const [active, setActive] = useState(false);

  return (
    <Link href={props.href} target="_blank" rel="noopener noreferrer">
      <i
        className={`fa-brands ${props.class} ${active ? "fa-beat-fade" : ""}`}
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      ></i>
    </Link>
  );
}
const Link = styled.a`
  text-decoration: none;
  color: ${darkGray};
  font-size: 1.8em;
  transition: color 0.2s ease-in-out;
  i {
    padding: 0.3em 0;
  }

  &:hover {
    color: ${mainColor};
  }
`;
