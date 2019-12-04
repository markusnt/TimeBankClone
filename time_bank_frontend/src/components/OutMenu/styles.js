import styled, { keyframes } from 'styled-components'

const coolBoxKeyframes = keyframes`
  0% {
    height: 0px;
    background: green;
  }

  100% {
    height: 150px;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const Menu = styled.div`
  display: inline-block;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  text-align: center;
  /* margin: 30px 0 30px 0; */
  width: 100%;
  position: relative;
  animation-name: ${coolBoxKeyframes};
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
    line-height: 40px;
    width: 100%;
    &:hover {
      background: linear-gradient(90deg, #FF5F6D, #FFC371);
      a {
        color: #fff
      }
    }

  }
`

