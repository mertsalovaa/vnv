import styled from "styled-components";
import { MainButton, lightGray } from "../details";

export default function LeadMagnet() {
  return (
    <LeadMagnetBlock className="d-flex flex-column align-items-center">
      <h2>Безкоштовна консультація</h2>
      <p>
        Отримайте безкоштовну консультацію від наших експертів та підкажіть нам,
        як ми можемо допомогти вам.
      </p>
      <MainButton>Замовити зараз</MainButton>
    </LeadMagnetBlock>
  );
}

const LeadMagnetBlock = styled.div`
  background: radial-gradient(${lightGray}, #fff);
  padding: 1.5em;
  text-align: center;

  h2 {
    font-size: 1.5em;
    font-weight: 600;
  }

  p {
    font-size: 1.2em;
    padding: 0.5em 0;
  }
`;
