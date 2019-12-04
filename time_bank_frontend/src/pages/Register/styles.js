import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #FF5F6D, #FFC371);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
height: 100%;
display: flex;
  justify-content: center;
  /* align-items: center; */
  /* width: 100%; */
  /* max-width: 315px; */
  text-align: center;

  img {
    height: 280px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 350px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    span {
      color: #F64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #eee;
      font-weight: bold;
      color: #000;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }


  }
`
