import React, { useState, useEffect } from "react";

const UsersTable = () => {
  const initialUsers = [
    {
      id: 1,
      name: "John Carter",
      email: "john@google.com",
      phone: "(414) 907 - 1274",
      location: "United States",
      company: "Google",
      companyLogo: "https://www.google.com/favicon.ico",
      status: "Online",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/d089b392612d4a606ce7d409838e5cb2acd3fea72c6ffb9f3d84b643f80f2fcc?placeholderIfAbsent=true"
    },
    {
      id: 2,
      name: "Sophie Moore",
      email: "sophie@webflow.com",
      phone: "(240) 480 - 4277",
      location: "United Kingdom",
      company: "Webflow",
      companyLogo: "https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg",
      status: "Offline",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/3ee006383ed13ee0fa4711ada9aab67700ec4222a5b1841ab55f9f865b5b826b?placeholderIfAbsent=true"
    },
    {
      id: 3,
      name: "Matt Cannon",
      email: "matt@facebook.com",
      phone: "(318) 698 - 9889",
      location: "Australia",
      company: "Facebook",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/240px-2023_Facebook_icon.svg.png",
      status: "Offline",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/c61a00de0c908658439d515a5b10b85ca66eee04889d0d9a7baec04f8a24a602?placeholderIfAbsent=true"
    },
    {
      id: 4,
      name: "Graham Hills",
      email: "graham@twitter.com",
      phone: "(540) 627 - 3890",
      location: "India",
      company: "Twitter",
      companyLogo:
        "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png",
      status: "Online",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/d523487f3532196ecdde8e21e87371a97a3e1c12cc97750090e04130d41d096b?placeholderIfAbsent=true"
    },
    {
      id: 5,
      name: "Sandy Houston",
      email: "sandy@youtube.com",
      phone: "(440) 410 - 3848",
      location: "Canada",
      company: "YouTube",
      companyLogo:
        "https://www.youtube.com/s/desktop/1f2ae858/img/favicon_32x32.png",
      status: "Offline",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/90705d5884228ca69432255bf17a6d7ac06e159de71ce45790f5278c4036aefd?placeholderIfAbsent=true"
    },
    {
      id: 6,
      name: "Andy Smith",
      email: "andy@reddit.com",
      phone: "(504) 456 - 3268",
      location: "United States",
      company: "Reddit",
      companyLogo:
        "https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png",
      status: "Online",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/0ba425e4ef32e3c3c7105b47ec9334c2b76aae2a57fe09944b4929f15758b846?placeholderIfAbsent=true"
    },
    {
      id: 7,
      name: "Lilly Woods",
      email: "lilly@spotify.com",
      phone: "(361) 692 - 1819",
      location: "Australia",
      company: "Spotify",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png",
      status: "Offline",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/7b97a82728119cec6534f13d8b810cf11e883a63d3e96ee477a720f03a782565?placeholderIfAbsent=true"
    },
    {
      id: 8,
      name: "Patrick Meyer",
      email: "patrick@pinterest.com",
      phone: "(760) 582 - 5670",
      location: "United Kingdom",
      company: "Pinterest",
      companyLogo: "https://s.pinimg.com/webapp/favicon-54a5b2af.png",
      status: "Online",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/d10b3514e266746995aaa8335d95d6c32c4802a43c495debb781181197ecca83?placeholderIfAbsent=true"
    },
    {
      id: 9,
      name: "Frances Willen",
      email: "frances@twitch.com",
      phone: "(210) 496 - 5864",
      location: "Canada",
      company: "Twitch",
      companyLogo:
        "https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png",
      status: "Offline",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/7b97a82728119cec6534f13d8b810cf11e883a63d3e96ee477a720f03a782565?placeholderIfAbsent=true"
    },
    {
      id: 10,
      name: "Ernest Houston",
      email: "ernest@linkedin.com",
      phone: "(704) 339 - 8813",
      location: "India",
      company: "LinkedIn",
      companyLogo: "https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8",
      status: "Offline",
      avatar: "https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/0be056849acc8888e9338a0c455e273209747c883cae731e0a5026c39f7dee4b?placeholderIfAbsent=true"
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState([1]);
  const [selectAll, setSelectAll] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Sort users when sortConfig changes
  useEffect(() => {
    let sortedUsers = [...initialUsers];
    if (sortConfig.key) {
      sortedUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    setUsers(sortedUsers);
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortClass = (name) => {
    if (!sortConfig || sortConfig.key !== name) {
      return "";
    }
    return sortConfig.direction === "ascending"
      ? "sorting-asc"
      : "sorting-desc";
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map((user) => user.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleEdit = (userId) => {
    console.log(`Edit user ${userId}`);
    // Implement edit functionality
    alert(`Editing user with ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    console.log(`Delete user ${userId}`);
    setUserToDelete(userId);
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter((user) => user.id !== userToDelete));
      setSelectedUsers(selectedUsers.filter((id) => id !== userToDelete));
      setShowConfirmDialog(false);
      setUserToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
    setUserToDelete(null);
  };

  return (
    <div className="users-table">
      <div className="table-header">
        <div className="table-title">
          <span>All Users</span>
          <span className="table-count">1 - {users.length} of 256</span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className="col-checkbox">
              <div
                className={`checkbox ${selectAll ? "checked" : ""}`}
                onClick={toggleSelectAll}
                role="checkbox"
                aria-checked={selectAll}
                tabIndex={0}
              ></div>
            </th>
            <th className="col-name">
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#AEB9E1"/>
                </svg>
                <span>Name</span>
              </div>
            </th>
            <th 
              className={`col-phone ${getSortClass("phone")}`}
              onClick={() => requestSort("phone")}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#AEB9E1"/>
                </svg>
                <span>Phone</span>
              </div>
            </th>
            <th 
              className={`col-location ${getSortClass("location")}`}
              onClick={() => requestSort("location")}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#AEB9E1"/>
                </svg>
                <span>Location</span>
              </div>
            </th>
            <th 
              className={`col-company ${getSortClass("company")}`}
              onClick={() => requestSort("company")}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" fill="#AEB9E1"/>
                </svg>
                <span>Company</span>
              </div>
            </th>
            <th 
              className={`col-status ${getSortClass("status")}`}
              onClick={() => requestSort("status")}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#AEB9E1"/>
                </svg>
                <span>Status</span>
              </div>
            </th>
            <th className="col-actions"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="col-checkbox">
                <div
                  className={`checkbox ${selectedUsers.includes(user.id) ? "checked" : ""}`}
                  onClick={() => toggleSelectUser(user.id)}
                  role="checkbox"
                  aria-checked={selectedUsers.includes(user.id)}
                  tabIndex={0}
                ></div>
              </td>
              <td className="col-name">
                <div className="user-cell">
                  <div className="user-avatar">
                    <img
                      src={user.avatar}
                      alt={user.name}
                    />
                  </div>
                  <div className="user-info">
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                  </div>
                </div>
              </td>
              <td className="col-phone phone-cell">{user.phone}</td>
              <td className="col-location location-cell">{user.location}</td>
              <td className="col-company company-cell">
                <img
                  src={user.companyLogo}
                  alt={user.company}
                  className="company-logo"
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
                <span>{user.company}</span>
              </td>
              <td className="col-status">
                <div
                  className={`status-cell ${user.status === "Online" ? "status-online" : "status-offline"}`}
                >
                  {user.status}
                </div>
              </td>
              <td className="col-actions">
                <div className="actions-cell">
                  <button
                    className="action-btn edit"
                    onClick={() => handleEdit(user.id)}
                    aria-label={`Edit ${user.name}`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1 3.9L8.1 0.9C7.9 0.7 7.7 0.6 7.5 0.6C7.3 0.6 7.1 0.7 6.9 0.9L0.9 6.9C0.7 7.1 0.6 7.3 0.6 7.5V10.5C0.6 10.7 0.7 10.9 0.9 11.1C1.1 11.3 1.3 11.4 1.5 11.4H4.5C4.7 11.4 4.9 11.3 5.1 11.1L11.1 5.1C11.3 4.9 11.4 4.7 11.4 4.5C11.4 4.3 11.3 4.1 11.1 3.9ZM4.5 10.5H1.5V7.5L6 3L9 6L4.5 10.5Z"
                        fill="#AEB9E1"
                      />
                    </svg>
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => handleDelete(user.id)}
                    aria-label={`Delete ${user.name}`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 2.4H8.1V1.5C8.1 1.1 7.9 0.7 7.6 0.4C7.3 0.1 6.9 0 6.5 0H5.5C5.1 0 4.7 0.2 4.4 0.4C4.1 0.7 4 1.1 4 1.5V2.4H1.5C1.1 2.4 0.7 2.6 0.4 2.9C0.1 3.2 0 3.6 0 4V4.5C0 4.7 0.1 4.9 0.3 5.1C0.5 5.3 0.7 5.4 0.9 5.4H1.1L1.5 11.1C1.5 11.3 1.6 11.5 1.8 11.7C2 11.9 2.2 12 2.4 12H9.6C9.8 12 10 11.9 10.2 11.7C10.4 11.5 10.5 11.3 10.5 11.1L10.9 5.4H11.1C11.3 5.4 11.5 5.3 11.7 5.1C11.9 4.9 12 4.7 12 4.5V4C12 3.6 11.8 3.2 11.5 2.9C11.2 2.6 10.9 2.4 10.5 2.4ZM5 1.5C5 1.3 5.1 1.2 5.1 1.1C5.2 1 5.3 1 5.5 1H6.5C6.7 1 6.8 1.1 6.9 1.1C7 1.2 7 1.3 7 1.5V2.4H5V1.5ZM9.5 11H2.5L2.1 5.4H9.9L9.5 11Z"
                        fill="#ef4444"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirmDialog && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete this user?</p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancel
              </button>
              <button className="delete-btn" onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;
