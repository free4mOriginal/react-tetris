import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
//   grid-gap: 1px;
  border: 2px solid #333;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 25vw;
//   background: #000;
  background: rgba(0, 0, 0, 0.5);
`;