import React from "react";

const NotificationsPage = ({ notifications, refresh }) => {
  return (
    <div>
      <button className="button" onClick={refresh}>Refresh Notifications</button>
      <section className="notificationsList">
        {notifications.map((n, idx) => (
          <div key={idx}>{n}</div>
        ))}
      </section>
    </div>
  );
};

export default NotificationsPage;
