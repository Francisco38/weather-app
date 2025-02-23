import styled from "styled-components";

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: Column;
  height: 100%;
  margin: 0px;
  text-align: start;
  white-space: nowrap;

  & > * {
    margin: 0; /* Remove margin from child elements */
    padding: 5px; /* Reduce padding inside child elements if needed */
  }

  @media (max-width: 700px) {
    flex-direction: Column;
    text-align: center;
    justify-content: center;
  }
`;

export const CurrentWeatherStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;