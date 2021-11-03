import { useEffect, useState } from "react";
import PostInput from "../post-input/post-input";
import Post from "../post/post";
import './home.scss';

export default function Home() {
    const [allPosts, setAllPosts] = useState([]);
    const [name, setName] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(async () => {
        try {
            const url = "https://netcraft-hackathon.herokuapp.com/posts";
            const response = await fetch(url);
            const json = await response.json();
            setAllPosts(json);
            console.log(json);
        } catch (error) {
            console.log("error", error);
        }
    }, []);

    const onRegister = async (event) => {
        event.preventDefault();

        try {
            const url="http://netcraft-hackathon.herokuapp.com/register";
            const requestOptions= {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name})
            }
            fetch(url, requestOptions).then(response => {
                setIsDisabled(true);
                console.log(response);
            });
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <div className="home">
            <header>Facebook</header>
            <form onSubmit={onRegister}>
                <input type="text" onChange={(event) => setName(event.target.value)} disabled={isDisabled}/>
                <button type="submit" disabled={isDisabled}>Register</button>
            </form>
            <PostInput />
            {allPosts.map((post, index) => <Post key={index} />)}
        </div>
    );
}