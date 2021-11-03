import { useEffect, useState } from "react";
import PostInput from "../post-input/post-input";
import Post from "../post/post";
import './home.scss';

export default function Home() {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(async () => {
        try {
            // const url = "https://netcraft-hackathon.herokuapp.com/posts";
            // const response = await fetch(url);
            // const json = await response.json();
            // setAllPosts(json);
            // console.log(json);

            setAllPosts(
                [
                    {
                        "name": "nicole",
                        "message": "bla bla",
                        "likes": [],
                        "comments": [],
                        "time": "2021-11-03T17:26:16.666Z",
                        "id": "0"
                    },
                    {
                        "name": "yoavAndYarin",
                        "message": "We Are The Best",
                        "likes": [],
                        "comments": [],
                        "time": "2021-11-03T17:38:17.250Z",
                        "id": "1"
                    },
                    {
                        "name": "Ran, Tamir, Alon",
                        "message": "mashu",
                        "likes": [],
                        "comments": [],
                        "time": "2021-11-03T17:46:22.079Z",
                        "id": "2"
                    },
                    {
                        "name": "testing!",
                        "message": "testing!",
                        "likes": [],
                        "comments": [],
                        "time": "2021-11-03T18:10:44.318Z",
                        "id": "3"
                    },
                    {
                        "name": "Tamir",
                        "message": "Message",
                        "likes": [],
                        "comments": [],
                        "time": "2021-11-03T18:11:20.537Z",
                        "id": "4"
                    },
                    {
                        "name": "nicole",
                        "message": "bla bla",
                        "likes": [],
                        "comments": [],
                        "time": "2021-11-03T18:12:10.032Z",
                        "id": "5"
                    }
                ]
            );

        } catch (error) {
            console.log("error", error);
        }
    }, []);

    return (
        <div className="home">
            <header>
                <h1>Facebook</h1>
            </header>
            
            <PostInput />
            {allPosts.map((post, index) => <Post key={index} post={post} />)}
        </div>
    );
}