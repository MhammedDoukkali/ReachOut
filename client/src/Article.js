import Section from "./Section";
import styled from "styled-components";
import LayoutSection from "./layout/LayoutSection";

// handle the map and display of each topics article
const Article = ({ section }) => {
  return (
    <>
      <LayoutSection />
      {section && (
        <Wrapper>
          {section.section.map((title) => {
            console.log(title);
            return <Section key={title} title={title} />;
          })}
        </Wrapper>
      )}
    </>
  );
};

export default Article;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
