import React from "react";

const LandingPage = ({ posts, addReaction }) => {
  return (
    <div>
      <h2>Landing Page</h2>
      <div className="posts-list">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};


export default LandingPage;
