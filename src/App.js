import React from 'react';
import styled from 'styled-components';
import HomeSection from './components/HomeSection';
import PricingSection from './components/PricingSection';
import { useMediaQuery } from 'react-responsive';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

`;
// main sections 
let sections = [
  { name: "Home", component: HomeSection, desc: "" },
  { name: "Pricing", component: PricingSection, desc: "" },
];

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  return (
    <AppContainer>
       {sections.map((prop, key) => {
        let ElementPage = prop.component;
        return (
            <Section key={key}>
               <ElementPage  isMobile={isMobile}/>
            </Section>
        );
      })}
    </AppContainer>
  );
};

export default App;
