import styled from "styled-components";

export const ForecastCardContainer = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 700px) {
     justify-content: center;
  }
`;

export const ForecastCardItem = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: center;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;

  & > * {
    margin: 0; /* Remove margin from child elements */
    padding: 5px; /* Reduce padding inside child elements if needed */
  }
`;