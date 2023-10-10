import styled from "styled-components";
import { darkGray, lightGray } from "../details";
import SocialItem from "./elements/social-item";

export default function SocialNetworks() {
  return (
    <SocialMediaBlock className="d-flex justify-content-between">
      <SocialItem
        href={"https://www.facebook.com/profile.php?id=100088433736254"}
        class={"fa-facebook"}
      />
      <SocialItem
        href={"https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE="}
        class={"fa-instagram"}
      />
      <SocialItem
        href={"https://www.linkedin.com/company/vnv-tech/"}
        class={"fa-linkedin"}
      />
      <SocialItem
        href={"https://t.me/vnv_solutions"}
        class={"fa-telegram"}
      />
      <SocialItem
        href={"https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"}
        class={"fa-tiktok"}
      />
    </SocialMediaBlock>
  );
}

const SocialMediaBlock = styled.div`
  transition: transform 0.2s ease-in-out;
  width: 90%;
 

  &:hover {
    /* Збільшення масштабу при наведенні */
  }
`;
