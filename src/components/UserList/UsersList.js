import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import "./UsersList.css"

export default function UsersList({ users }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.github.com/search/users?q=${users}`;
        const getUsers = await fetch(url).then(res => res.json());
        setData(getUsers.items);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [users]);

  if (!users) {
    return <p className="UsersList_error-message">No users yet</p>;
  }
  if (!data) {
    return (
      <div>
        <p>No data found. Try to reload the page</p>
        <Redirect to='/' />
      </div>
    );
  }
  if (!data.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <ul className="UsersList">
        {data.map(user => {
          return (
            <li key={user.id}>
              <span>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="UsersList_image"
                />
              </span>
              <Link
                to={`/${user.login}`}
                className="UsersList_link">
                <span>{user.login}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
