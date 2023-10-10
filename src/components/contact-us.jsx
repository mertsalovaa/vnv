import styled from "styled-components";
import {
  MainButton,
  Title,
  darkGray,
  darkMainColor,
  mainColor,
} from "../details";
import PhoneNumberInput from "./elements/phone-input";
import { useState } from "react";
import SocialNetworks from "./social-networks";

export default function ContactUs() {
  const [phone, setPhone] = useState("");
  const getPhone = (value) => {
    setPhone(value);
  };
  return (
    <Block className="w-100 row align-items-center justify-content-center">
      <Title>
        <span>/</span> Зв'яжіться з нами
      </Title>
      <div className="col-lg-5 col-md-10">
        <p>
          Пишіть, телефонуйте або заповнюйте форму, щоб більше дізнатись про
          нашу компанію.
        </p>
        <h5>team@vnv.solutions</h5>
        <p>Karla Miklʹosha, 7 Lviv, Ukraine</p>
        <SocialNetworks />
      </div>
      <div className="col-lg-6 col-md-10">
        <ContactForm className="d-flex flex-column align-items-start">
          <label htmlFor="name-input">Імʼя</label>
          <input type="text" id="name-input" placeholder="Імʼя" />
          <label htmlFor="email-input">Email</label>
          <input type="email" id="email-input" placeholder="Email" />
          <label htmlFor="email-input">Телефон</label>
          <PhoneNumberInput getPhone={getPhone} />
          <MainButton>Відправити</MainButton>
        </ContactForm>
      </div>
    </Block>
  );
}

const Block = styled.div`
  padding-bottom: 1em;
  div {
    h5,
    p {
      font-size: 1.15em;
      padding: 0.5em 0;
    }
    h5 {
      font-weight: 600;
      text-decoration: underline;
      color: gray;
    }
  }
`;

const ContactForm = styled.div`
  border: 1px solid ${darkMainColor};
  border-radius: 1em;
  padding: 2em;
  input {
    width: 100%;
    margin-bottom: 1em;
    margin-top: 0.3em;
    outline: none;
    border: 1px solid ${mainColor};
    border-radius: 0.7em;
    padding: 0.7em;
    &:hover {
      border: 1px solid ${darkMainColor};
    }
  }
  label {
    margin-left: 0.3em;
    /* font-weight: bold; */
    font-size: 1.1em;
    color: #000;
  }
`;

// Email, call, or complete the form to learn how
//Kion can solve your cloud management and governance challenges.
// info@kion.io
// 301-867-KION (5466)
// Customer Support Portal
