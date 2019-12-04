import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(-90deg, #29A85B, #1557B7, #fff, #89741B);
  /* max-width: 700px; */
  /* background: #fff; */
  /* border-radius: 4px; */
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); */
  /* padding: 30px; */
  /* margin: 80px auto; */

  img {
    height: 300px;
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
  }
`

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  max-width: 100px;
  background: #0277bd;
  border: 0;
  padding: 0 15px;
  /* margin-left: 10px; */
  border-radius: 4px;
`
