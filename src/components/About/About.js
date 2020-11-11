import React from 'react';
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  const imageUrl = "https://avatars3.githubusercontent.com/u/54849930?s=400&u=2625d054497cc3d8fb4e323eb520ac226928b27e&v=4";
  const gitHubUrl = 'https://github.com/tiago86g/GutHub_user-search';
  return (
    <div className="about">
      <div className="block-center">
        <img className="about_image" src={imageUrl} alt="Tiago" />
      </div>
      <h1 className="about_main-name">About me</h1>
      <div>
       <p className="about_details"> Brazilian web developer and designer with a clear strategic approach to problem solving.
With a background as a designer, I am highly skilled in structuring complex layers of information. I also have vast experience adapting data to different languages.</p>

<p className="about_details">I'm a teamplayer by nature and very self-motivated. Moreover, I truly care about winning as a team and enjoy the collaboration process with other developers because it makes all of us better. </p> 
      </div>
      
      <div className="about_github-page block-center">
          <a href={gitHubUrl} alt={`link to this project GitHub page`}target={gitHubUrl}>
            <button className="about-github-button">
              <FontAwesomeIcon icon={faGithub} size="4x" className="tiago-github-icon"/>
            </button>
          </a>
        </div>
    </div>
    
  );
}
