import styled from "styled-components";
import { MainButton, Title } from "../details";

export default function Brief() {
  return (
    <BriefContainer>
      <Title>
        <span>/</span> Бриф
      </Title>
      <div className="col-lg-8 col-md-12 d-flex flex-column align-items-center">
        <p className="text-center">
          Бриф - це документ або форма, яка містить важливу інформацію для
          виконавця проекту або завдання. Він допомагає з'ясувати цілі, вимоги
          та очікування замовника щодо проекту або послуги. Заповнення брифу є
          важливим кроком у співпраці між замовником і виконавцем, оскільки він
          допомагає уточнити всі деталі і забезпечити ефективне виконання
          завдання.
        </p>
        <MainButton>Заповнити зараз</MainButton>
      </div>
    </BriefContainer>
  );
}

const BriefContainer = styled.div`
  div {
    margin: 0 auto;
    p {
      font-size: 1.2em;
      padding: 2em 1em;
    }
  }
`;
