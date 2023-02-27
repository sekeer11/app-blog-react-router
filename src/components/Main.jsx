import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Blog from '../pages/Blog';
import AcercaDe from '../pages/Acerca_de';
import Post from '../pages/Post';
import Error404 from '../pages/Error404';

const Main = () => {
    return ( 
        <ContenedorMain>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/acerca-de" element={<AcercaDe />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
      </ContenedorMain>
     );
}
 
const ContenedorMain = styled.main`
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
export default Main;