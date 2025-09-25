import React, { useState } from "react";

const UsersPage = ({ users, posts }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <ul>
        {users.map((user, idx) => (
          <li key={idx} onClick={() => setSelectedUser(user)}>{user}</li>
        ))}
      </ul>
      {selectedUser && posts.filter(p => p.author === selectedUser).map(p => (
        <div className="post" key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
