import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: Column;
  width: 100%; 
  margin: 20px;
  max-width: 1200px;
  justify-content: center;
  
  h1 {
    font-size: 3rem;
    text-align: center;
    color:rgb(25, 107, 179);
  }

  h2 {
    font-size: 1.375rem;
    text-align: center;
    color:rgb(25, 107, 179);
  }
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; 
  margin: 0px; 
  padding: 20px;
  gap: 50px;
  justify-content: space-between;
    
  @media (max-width: 700px) {
    flex-direction: Column;
    align-items: center;
  }
`;

export const CurrentWeatherStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.div`
  display: flex;
  flex-direction: Column;
  height: 100%;
  width: 100%; 
  margin: 0px;
  text-align: start;

  @media (max-width: 700px) {
    flex-direction: Column;
    text-align: center;
  }

  & > * {
    margin: 0; /* Remove margin from child elements */
    padding: 5px; /* Reduce padding inside child elements if needed */
  }
`;
