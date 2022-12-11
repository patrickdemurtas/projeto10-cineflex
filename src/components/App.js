import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import TelaFilmes from './TelaFilmes';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from 'axios';

function App() {
  return (
    <>
      

      <LogoCineFlex >
      <h1>CINEFLEX</h1>
    </ LogoCineFlex>

    <TelaFilmes />
 

 </>


  );
}

export default App;




const LogoCineFlex = styled.div`
width: 375px;
height: 67px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
background-color: #C3CFD9;

h1{
  color: #E8833A;
  font-family: roboto;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

}
`