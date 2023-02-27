import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';


const App = () => {
  return ( 
      <BrowserRouter>
        <ContenedorPrincipal>
          <Header />
          <Main />
        </ContenedorPrincipal>
      </BrowserRouter>
   );
}
 
const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;
export default App;