import { useEffect, useState } from "react";
import PostInput from "../post-input/post-input";
import Post from "../post/post";
import './home.scss';

export default function Home() {
    const [allPosts, setAllPosts] = useState([]);

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

    return (
        <div className="home">
            <header>Facebook</header>
            <PostInput />
            {allPosts.map((post, index) => <Post key={index} />)}
        </div>
    );
}