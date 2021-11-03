import React, { useState } from 'react';
import './post-input.scss';

export default function PostInput() {
     const [post, setPost] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(post);
        setPost("");
    };

    return (
        <div class="post-input">
            <form onSubmit={onSubmit}>
               <input type="text" onChange={(event) => setPost(event.target.value)}/>
               <button type="submit">post</button> 
            </form>
        </div>
    )
}