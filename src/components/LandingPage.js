import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ posts, addReaction }) => {
  const navigate = useNavigate();

  return (
    <div className="posts-list">
      <a href="/create">Create Post</a>
      {posts.map(post => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p><b>Author:</b> {post.author}</p>
          <p>{post.content}</p>
          <div>
            {post.reactions.map((r, idx) => (
              <button key={idx} onClick={() => addReaction(post.id, idx)}>{r}</button>
            ))}
          </div>
          <button className="button" onClick={() => navigate(`/posts/${post.id}`)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
