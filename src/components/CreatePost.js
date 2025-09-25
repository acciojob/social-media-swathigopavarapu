import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ users, addPost }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(users[0]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    addPost(title, author, content);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <select id="postAuthor" value={author} onChange={e => setAuthor(e.target.value)}>
        {users.map(u => <option key={u} value={u}>{u}</option>)}
      </select>
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
