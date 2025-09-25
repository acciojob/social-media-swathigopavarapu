import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetails = ({ posts, updatePost }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const navigate = useNavigate();

  const handleSave = () => {
    updatePost(post.id, title, content);
    navigate("/");
  };

  return (
    <div className="post">
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />
      <button className="button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default PostDetails;
