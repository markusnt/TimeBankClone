import styled from 'styled-components'

export const Container = styled.div`
 max-width: 600px;
 margin: 50px auto;

 display: flex;
 flex-direction: column;

 header {
   display: flex;
   align-self: center;
   align-items: center;

   button {
     border: 0;
     background: none;
   }

   strong {
     color: #fff;
     font-size: 24px;
     margin: 0 15px;
   }

   p {
    color: #fff;
     font-size: 16px;
     margin: 0 15px;
   }
 }

 ul {
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   grid-gap: 15px;
   margin-top: 30px;
   margin-left: 20px;
   margin-right: 20px;
 }
`

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  /* max-width: 600px; */

  strong {
    display: block;
    color: #1ab324;
    font-size:20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`
