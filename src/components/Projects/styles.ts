import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  
  div {
    margin-top: 10px;
    width: 100%;
    border-radius: 5px;
    background: #444;
    height: 200px;
    padding: 10px 10px !important;


    img {
      width: 100% !important;
      height: 100% !important;
      border-radius: 5px !important;
    }
  }
`;
