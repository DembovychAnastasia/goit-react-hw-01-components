import styled from "styled-components";
import { getRandomHexColor } from '../getRandom';

export const Statistics = styled.section `
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
 
  width: 360px;
  max-width: 100%;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 3px solid #83bcbc;
  border-radius: 8px;
`;
export const Title= styled.h2 `
  margin: 0;
  padding: 32px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 30px;
  border-bottom: 1px solid #d3d5e3;
  background-color: #fff;
`;
export const StatList= styled.ul `
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const Label = styled.span`

  font-size: 1rem;
  color: #fff;
`;

export const Percentage = styled.span`

  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`; 
export const StatItem= styled.li `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  padding: 5px;
  width: 100%;
  height: 100%;
  text-shadow: 0 0 1px #000;
  :first-child {
    border-bottom-left-radius: 0.5rem;
  }
  :last-child {
    border-bottom-right-radius: 0.5rem;
  }
  background-color: ${ getRandomHexColor}
`;

