import { useSpring, animated } from "react-spring";
import { Accordion } from "./elements/accordion-item";
import { faqArr } from "./data/faq";
import { Title } from "../details";
import styled from "styled-components";

export default function FAQ() {
  return (
    <div>
      <Title><span>/</span> FAQ</Title>
      <AccordionBlock className="col-lg-8 col-md-12">
        {faqArr.map((item) => (
          <Accordion
          key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </AccordionBlock>
    </div>
  );
}

const AccordionBlock = styled.div`
    padding-bottom: 2em;
    margin: 0 auto;
`
