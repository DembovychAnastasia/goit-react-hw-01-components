import styled from "styled-components";

export const ProfileContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */

  width: 360px;
  max-width: 100%;

 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  border: 3px solid #83bcbc;
`;

export const Description= styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #fff;
`;

export const Avatar= styled.img `
  display: flex;
  max-width: 80%;
  border: 1px solid #83bcbc;
  border-radius: 50%;
`;

export const Name= styled.p `
   margin-bottom: 8px;
  font-weight: bold;
  font-size: 30px;
`;
export const Tag= styled.p `
  margin: 8px;
  font-size: 24px;
  color: #8a8b8e;
`;
export const Location= styled.p `
  margin: 8px;
  font-size: 20px;
  color: #8a8b8e;
`;

export const Stats= styled.ul `
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const StatsItem= styled.li `
    display: flex;
  flex-direction: column;
  padding: 16px 0;
  font-size: 18px;
  text-align: center;
  background-color: rgba(241, 241, 241, 0.833);

  :not(:last-child){
  border-right: 1px solid #d3d5e3;
  }
`;

export const Label= styled.span `
  padding-bottom: 8px;
  color: #8a8b8e;
 
`;
export const Quantity= styled.span `
  font-weight: bold;
`;




