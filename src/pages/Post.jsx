import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import post from '../data/post';

const Post = () => {
    const {id} = useParams()

    return ( 
        <>
            { post[id-1] ?
                <div>
                    <h1> { post[id-1].titulo } </h1>
                    <p> { post[id-1].texto } </p>
                </div>
            :
                <Navigate replace to="/blog" />
            }
        </>
     );
}
 
export default Post;
