import styled from "styled-components";

export const Friends = styled.ul `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin: 0 auto;
  padding: 0;
  margin-bottom: 5px;

  list-style-type: none;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  /* border-radius: 0.5rem; */
  /* border: 3px solid #83bcbc; */

  
`;
export const FriendsItem = styled.li `
    display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: 10px;
  max-width: 100%;
  width: 360px;
  

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  border: 3px solid #83bcbc;
`;

export const Status = styled.span`
  display: block;
  margin-left: 1.625rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status? 'green' : 'red';
  }};
`;

export const Avatar= styled.img`
display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;

`;


export const Name = styled.p`
  margin-left: 10px;
  color: #9e0202;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 700;
`;

