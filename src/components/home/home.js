import PostInput from "../post-input/post-input";
import Post from "../post/post";
import './home.scss';

export default function Home() {


    const allPost = [
        {
        },
        {
        },
    ];

    return (
        <div className="home">
            <header>Facebook</header>
            <PostInput />
            {allPost.map((post, index) => <Post key={index} />)}
        </div>
    );
}