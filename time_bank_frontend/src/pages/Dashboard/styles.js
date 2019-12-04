import styled, { keyframes } from 'styled-components'
import DatePicker from 'react-datepicker'
import ClickNHold from 'react-click-n-hold';


export const Container = styled.div`
  /* background: linear-gradient(#29A85B, #1557B7, #89741B); */
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    padding: 0 0 10px;
  }
`

export const Data = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5%;
  color: #fff;
  /* size: 30px; */
`;

export const ContainerRegistro = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  /* margin-bottom: 5%; */
`;

export const RegistroColumn = styled.div`
display: flex;
  flex-direction: row;
`;

export const Registro = styled.div`
    display: flex;
  flex-direction: column;
    padding: 0px 30px;
    justify-items:center;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    margin-right: 5%;
    background: #fff;
    font-size: 14px;
    height: 50px;
    border-radius: 20px 0 20px 20px;
    border-left: 10px solid #F2F2F2;
    border-bottom: 5px solid #F2F2F2;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


export const StateButton = styled(ClickNHold)`

  .circleBase {
    border-radius: 50%;
    behavior: url(PIE.htc); /* remove if you don't care about IE8 */
}

.type1 {
    width: 150px;
    height: 150px;
    /* background: yellow; */
    border: 5px solid #fff;

    &:hover {
      animation: ${rotate} 3s linear infinite;

    /* background: linear-gradient(90deg, #10DC60, #00FF64); */
    border: 5px dotted #10DC60;
    }

}

  img {
    height: 20vh;
  }
`

export const DateTime = styled(DatePicker)`
  border: transparent;
  background-color: transparent;
`
