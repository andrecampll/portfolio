import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 1000px;

  .grid-container {
    background: #1D1D1D;
    border-radius: 5px;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 0;
    margin-top: 30px;
    color: #7159c1;
  }

  .grid-item {
    padding: 23px;
  }

  .react {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #254DE4;
      border: #254DE4 solid 1px;
    }
  }

  .reactNative {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #00AEF7;
      border: #00AEF7 solid 1px;
    }
  }

  .node {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #7ebb42;
      border: #7ebb42 solid 1px;
    }
  }

  .Html5 {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #F16529;
      border: #F16529 solid 1px;
    }
  }

  .css {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #2965F1;
      border: #2965F1 solid 1px;
    }
  }

  .Git {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #F34F29;
      border: #F34F29 solid 1px;
    }
  }
  

  .Gitlab {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #FCA325;
      border: #FCA325 solid 1px;
    }
  }

  .docker {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #049AE9;
      border: #049AE9 solid 1px;
    }
  }

  .docker {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #049AE9;
      border: #049AE9 solid 1px;
    }
  }

  .Python {
    transition: all 0.4s;
    border: #1D1D1D solid 1px;
    border-radius: 5px;

    &:hover {
      color: #FFC91F;
      border: #FFC91F solid 1px;
    }
  }

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
