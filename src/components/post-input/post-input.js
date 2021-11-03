import React, { useState } from 'react';
import './post-input.scss';

export default function PostInput() {
     const [message, setMessage] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        try{
            const url="http://netcraft-hackathon.herokuapp.com/post";
            const requestOptions= {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name: "shimon", message})
            }
            fetch(url, requestOptions).then(response => console.log(response))
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="post-input">
            <form onSubmit={onSubmit}>
                <input type="text" onChange={(event) => setMessage(event.target.value)} placeholder="What's on your mind? 🤔"/>
               <button type="submit">Post</button> 
            </form>
        </div>
    )
}