import './post.scss';

export default function Post({ post }) {
    const [comment, setComment] = useState("");

    const onLikePost = async () => {
        try {
            const url = "http://netcraft-hackathon.herokuapp.com/like";
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: "shimon", id: post.id })
            }
            fetch(url, requestOptions).then(response => console.log(response))
        } catch (error) {
            console.log("error", error);
        }
    }
    const onComment = async () => {
        try {
            const url = "http://netcraft-hackathon.herokuapp.com/comment";
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: "shimon", message: comment, postId: post.id })
            }
            fetch(url, requestOptions).then(response => console.log(response))
        } catch (error) {
            console.log("error", error);
        }
    }

    return (
        <div className="post">
            <div className="post-head">
                <span className="name">
                    {post.name}
                </span>
                <span className="date">
                    {post.time.split("T")[0]}
                </span>
            </div>

            <h2 className="post-body">
                {post.message}
            </h2>

            <div className="likes">
                <span>
                    {post.likes.length} likes
                </span>
                <button type="button" onClick={onLikePost}>❤</button>
            </div>

            <input type="text" placeholder="Write a comment here.." onChange={(event) => setComment(event.target.value)}></input>
            <button type="button" onClick={onComment}>Send</button>
        </div>
    );
}