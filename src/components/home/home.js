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

            // setAllPosts(
            //     [
            //         {
            //             "name": "nicole",
            //             "message": "bla bla",
            //             "likes": [],
            //             "comments": [],
            //             "time": "2021-11-03T17:26:16.666Z",
            //             "id": "0"
            //         },
            //         {
            //             "name": "yoavAndYarin",
            //             "message": "We Are The Best",
            //             "likes": [],
            //             "comments": [],
            //             "time": "2021-11-03T17:38:17.250Z",
            //             "id": "1"
            //         },
            //         {
            //             "name": "Ran, Tamir, Alon",
            //             "message": "mashu",
            //             "likes": [],
            //             "comments": [],
            //             "time": "2021-11-03T17:46:22.079Z",
            //             "id": "2"
            //         },
            //         {
            //             "name": "testing!",
            //             "message": "testing!",
            //             "likes": [],
            //             "comments": [],
            //             "time": "2021-11-03T18:10:44.318Z",
            //             "id": "3"
            //         },
            //         {
            //             "name": "Tamir",
            //             "message": "Message",
            //             "likes": [],
            //             "comments": [],
            //             "time": "2021-11-03T18:11:20.537Z",
            //             "id": "4"
            //         },
            //         {
            //             "name": "nicole",
            //             "message": "bla bla",
            //             "likes": [],
            //             "comments": [],
            //             "time": "2021-11-03T18:12:10.032Z",
            //             "id": "5"
            //         }
            //     ]
            // );

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
            <header>
                <h1>Facebook</h1>
            </header>
            
            {/* <form onSubmit={onRegister}>
                <input type="text" onChange={(event) => setName(event.target.value)} disabled={isDisabled}/>
                <button type="submit" disabled={isDisabled}>Register</button>
            </form> */}
            
            <PostInput />
            {allPosts.map((post, index) => <Post key={index} post={post} />)}
        </div>
    );
}