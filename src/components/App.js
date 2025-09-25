import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "../styles/App.css"
import LandingPage from './LandingPage';
import CreatePost from './CreatePost';
import PostDetails from './PostDetails';
import UsersPage from './UsersPage';
import NotificationsPage from './NotificationsPage';


const initialUsers = ["Alice", "Bob", "Charlie"];
const initialPosts = [
  { id: 1, title: "First Post", author: "Alice", content: "Hello world!", reactions: [0,0,0,0,0] }
];
const initialNotifications = ["Welcome to GenZ!"];

const App = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [notifications, setNotifications] = useState([]);

  const addPost = (title, author, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      author,
      content,
      reactions: [0,0,0,0,0]
    };
    setPosts([newPost, ...posts]);
  };

  const updatePost = (id, title, content) => {
    setPosts(posts.map(p => p.id === id ? { ...p, title, content } : p));
  };

  const addReaction = (postId, index) => {
    setPosts(posts.map(p => {
      if (p.id === postId && index < 4) {
        const newReactions = [...p.reactions];
        newReactions[index] += 1;
        return { ...p, reactions: newReactions };
      }
      return p;
    }));
  };

  const refreshNotifications = () => setNotifications(initialNotifications);

  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <nav>
          <a href="/">Posts</a> | <a href="/users">Users</a> | <a href="/notifications">Notifications</a>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage posts={posts} addReaction={addReaction} />} />
          <Route path="/posts/:id" element={<PostDetails posts={posts} updatePost={updatePost} />} />
          <Route path="/create" element={<CreatePost users={initialUsers} addPost={addPost} />} />
          <Route path="/users" element={<UsersPage users={initialUsers} posts={posts} />} />
          <Route path="/notifications" element={<NotificationsPage notifications={notifications} refresh={refreshNotifications} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
