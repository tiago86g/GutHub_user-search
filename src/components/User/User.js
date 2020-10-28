import React, { useState, useEffect } from 'react';
import './User.css'

export default function User({ match }) {
  // console.log({ match });
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.github.com/users/${match.params.id}`;
        const matchedUser = await fetch(url).then(res => res.json());
        setUser(matchedUser); // connect "match" with the "user" useState
      } catch (err) {
        return console.error();
      }
    };
    fetchData();
  }, [match]);

  if (!user.login) {
    return (
      <div>
        <p>User not found!</p>
      </div>
    );
  } else {
    return (
      <div className="User">
        <div className="block-center">
          <img className="User_image" src={user.avatar_url} alt={user.login} />
        </div>
        <h1 className="User_main-name">{user.login||"GitHub user"}</h1>
        <div className="User_details">
          <p>
            name: <strong>{user.name || '***'}</strong>
          </p>
          <p>
            e-mail: <strong>{user.email || '***'}</strong>
          </p>
          <p>
            location: <strong>{user.location || '***'}</strong>
          </p>
          <p>
            company: <strong>{user.company || '***'}</strong>
          </p>
          <p>
            created at:{' '}
            <strong>{user.created_at.slice(0, 10) || '***'}</strong>
          </p>
          <p>
            Following: <strong>{user.following || '***'}</strong>
          </p>
          <p>
            followers: <strong>{user.followers || '***'}</strong>
          </p>
          <p>
            type: <strong>{user.type || '***'}</strong>
          </p>
          <p>
            twitter: <strong>{user.twitter_username || '***'}</strong>
          </p>
          <p>
            last update:{' '}
            <strong>{user.updated_at.slice(0, 10) || '***'}</strong>
          </p>
        </div>
        <div className="User_github-page block-center">
          <a href={user.html_url} alt={`link to GitHub page of ${user.login}`}target={user.html_url}>
            <button className="User_button">{`GitHub - ${user.login}`}</button>
          </a>
        </div>
      </div>
    );
  }
}
