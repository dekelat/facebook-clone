import './post.scss';

export default function Post({ post }) {

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
                <button type="button">❤</button>
            </div>

            <input type="text" placeholder="Write a comment here.."></input>
            <button type="button">Send</button>
        </div>
    );
}