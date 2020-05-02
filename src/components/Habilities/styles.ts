import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 0 1000px;
  ul {
    margin-top: 30px;
    width: 100%;
    list-style: none;
    text-align: left !important;

    strong {
      color: #7159c1;
    }

    li {
      div {
        height: 5px;
        background: #fff;
        width: 100%;
        padding: 0;
        margin-top: 10px;
        margin-bottom: 10px;

        div {
          padding: 0;
          margin-top: 0;
          background: #7159c1;
          height: 100%;
        }

        #React {
          width: 98% !important;
        }

        #ReactNative {
          width: 94% !important;
        }

        #NodeJS {
          width: 88% !important;
        }

        #CSS {
          width: 95% !important;
        }
      }
    }
  }
  .main {
  position: relative;
  width: 100%;
  height: 7px;
  background: #fff;
  cursor: pointer;
  border-radius: 2px;
  overflow: hidden;
  padding: 0;
  border: 0;
}

.fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #7159c1;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
`;
