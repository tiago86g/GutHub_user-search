import React from 'react';
import "./About.css"

export default function About() {
  const imageUrl = "https://avatars3.githubusercontent.com/u/54849930?s=400&u=2625d054497cc3d8fb4e323eb520ac226928b27e&v=4";
  const gitHubUrl = 'https://github.com/tiago86g/GutHub_user-search';
  return (
    <div className="About">
      <div className="block-center">
        <img className="About_image" src={imageUrl} alt="Tiago" />
      </div>
      <h1 className="About_main-name">About me</h1>
      <div>
       <p className="About_details"> Brazilian web developer and designer with a clear strategic approach to problem solving.
With a background as a designer, I am highly skilled in structuring complex layers of information. I also have vast experience adapting data to different languages.</p>

<p className="About_details">I'm a teamplayer by nature and very self-motivated. Moreover, I truly care about winning as a team and enjoy the collaboration process with other developers because it makes all of us better. </p> 
      </div>
      
      <div className="About_github-page block-center">
          <a href={gitHubUrl} alt={`link to this project GitHub page`}target={gitHubUrl}>
            <button className="About_button">Open on GitHub</button>
          </a>
        </div>
    </div>
  );
}
