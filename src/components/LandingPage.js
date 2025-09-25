import React from "react";
import { Link } from "react-router-dom";

const LandingPage = ({ posts, addReaction }) => {
  return (
    <div>
      <h2>Landing Page</h2>
      <div className="posts-list">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>By {post.author}</p>

            {/* Reaction buttons */}
            <div>
              {["👍","❤️","😂","🔥","❌"].map((emoji, idx) => (
                <button key={idx} onClick={() => addReaction(post.id, idx)}>
                  {emoji} {post.reactions[idx]}
                </button>
              ))}
            </div>

            {/* View button */}
            <Link to={`/posts/${post.id}`} className="button">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
