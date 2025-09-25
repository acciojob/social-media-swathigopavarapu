import React from "react";

const LandingPage = ({ posts, addReaction }) => {
  return (
    <div>
      <h2>Landing Page</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
