import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  aside {

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #7159c1;
      margin-top: 10px;
      font-size: 10px;
      
      transition: 0.4s color;
      
      &:hover {
      color: #fff;
    }
    }

    span {
      margin-top: 10px;
    }
  }
`;
