import styled from "styled-components";

export const Transaction = styled.table `
  margin: 50px auto;
  border-radius: 0.5rem;
  max-width: 90%;
  width: 90%;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 3px solid #83bcbc;
  border-radius: 8px;
`;

export const Thead = styled.thead`
 font-size: 24px;
text-align: center;
`;

export const TheadTr = styled.tr`
 
  color: #8a8b8e;
  font-size: 32px;
  text-align: center;
  text-transform: capitalize;
`;

export const Th = styled.th`

  padding: 16px 80px;
  background-color: #02bbd7;
  color: #fff;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  :first-child {
    border-top-left-radius: 0.125rem solid #e9edff;
  }
  :last-child {
    border-top-right-radius: 0.125rem solid #e9edff;
  }
`;

export const Td = styled.td`

  text-align: center;
  color: #000;
    font-size: 18px;
    text-align: center; 
    text-transform: capitalize;
    padding: 10px;
    border: 0.125rem solid #e9edff;
   
`;  

export const ExtendedTr = styled.tr`
  background-color: ${props =>
    props.index % 2 === 0 ? '#b4d8d8' : 'transparent'};
`;







