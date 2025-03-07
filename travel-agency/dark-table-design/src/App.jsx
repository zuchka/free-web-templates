import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <header className="header">
          <h1 className="page-title">Users</h1>

          <div className="search-bar">
            <div className="search-input">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.2593 12.9445C10.5321 12.9445 13.1852 10.2914 13.1852 7.01858C13.1852 3.74578 10.5321 1.09265 7.2593 1.09265C3.9865 1.09265 1.33337 3.74578 1.33337 7.01858C1.33337 10.2914 3.9865 12.9445 7.2593 12.9445Z"
                    stroke="#AEB9E1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="company-logo"
                  />
                </svg>
              </div>
              <input type="text" placeholder="Search for..." />
            </div>
          </div>

          <button className="add-user-btn">Add user</button>
        </header>

        <section className="stats-cards">
          <StatsCard
            icon={
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33558 7.47976C5.84534 7.47976 6.31264 7.243 6.69066 6.87923C6.29416 6.16823 6.06783 5.36385 6.06783 4.592C6.06783 3.93743 6.22573 3.31999 6.50367 2.77479C6.15895 2.56341 5.75605 2.43951 5.32387 2.43951C4.06065 2.43951 3.03674 3.47826 3.03674 4.75946C3.03674 6.04084 4.07236 7.47976 5.33558 7.47976Z"
                  fill="#CB3CFF"
                />
                <path
                  d="M6.8738 8.58C6.65058 8.53184 6.41949 8.50519 6.18199 8.50519H4.4811C2.67116 8.50519 1.20374 9.97719 1.20374 11.7931L1.21142 12.1819C1.21142 12.6892 1.62146 13.1006 2.12719 13.1006H3.80429C3.88663 11.0803 5.12479 9.35791 6.8738 8.58Z"
                  fill="#CB3CFF"
                />
                <path
                  d="M10.016 7.96472C11.5822 7.96472 12.8376 6.18041 12.8376 4.59169C12.8376 3.00297 11.5678 1.71497 10.0016 1.71497C8.43534 1.71497 7.16553 3.00297 7.16553 4.59169C7.16571 6.18041 8.4498 7.96472 10.016 7.96472Z"
                  fill="#CB3CFF"
                />
                <path
                  d="M15.1296 13.3137C15.1296 11.0619 13.3101 9.23663 11.0658 9.23663H8.95672C6.7124 9.23663 4.89294 11.0619 4.89294 13.3137L4.90264 13.7958C4.90264 14.4248 5.41093 14.9349 6.03816 14.9349H14.004C14.631 14.9349 15.1395 14.4248 15.1395 13.7958L15.1296 13.3137Z"
                  fill="#CB3CFF"
                />
              </svg>
            }
            title="Total Users"
            value="250"
            color="purple"
          />

          <StatsCard
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM12 8.8H8.8V12H7.2V8.8H4V7.2H7.2V4H8.8V7.2H12V8.8Z"
                  fill="#F59E0B"
                />
              </svg>
            }
            title="New Users"
            value="15"
            color="yellow"
          />

          <StatsCard
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                  fill="#10B981"
                />
                <path
                  d="M4.8 8L7.2 10.4L11.2 6.4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Top Users"
            value="200"
            color="green"
          />

          <StatsCard
            icon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4Z"
                  fill="#3B82F6"
                />
                <path
                  d="M8 4H8.008"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.4 8H8V11.2H9.6"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            title="Other Users"
            value="35"
            color="blue"
          />
        </section>

        <UsersTable />
      </main>
    </div>
  );
}

export default App;
