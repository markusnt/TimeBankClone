import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  /* background: linear-gradient(-90deg, #004c7c, #0074bc); */
  background: #fff;
  /* padding: 0 10px; */

  svg {
    width: 45px;
    height: 45px;
  }
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    padding-left: 10px;

    svg {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #9D192C;
    }

    a {
      font-weight: bold;
      color: #000;
      font-size: 16px
    }
  }

  aside {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #9D192C;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #eee;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 45px;
    /* border-radius: 50%; */
  }
`;

const coolBoxKeyframes = keyframes`
  100% {
    height: 0px;
    background: linear-gradient(90deg, #FF5F6D, #FFC371);
  }

  100% {
    height: 138px;
    background: linear-gradient(90deg, #FF5F6D, #FFC371);
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  /* background: rgba(0, 0, 0, 0.05); */
  background: linear-gradient(90deg, #FF5F6D, #FFC371);
  cursor: pointer;
  text-align: center;
  /* margin: 30px 0 30px 0; */
  width: 100%;
  position: relative;
  /* animation-name: ${coolBoxKeyframes}; */
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
  a {
    font-weight: bold;
    color: #000
  }
  li {
    margin-top: 10px;
    text-decoration: none;
    line-height: 40px;
    width: 250px;
      border-radius: 20px;
      background: #fff;
      margin-bottom: 5px;
    &:hover {
      text-decoration: none;
      a {
        text-decoration: none;
        color: #FFC371;
      }
    }

  }
`
