// import React from 'react'

import Navbar from "./Navbar";

function Contentgesture() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <video
            autoPlay
            loop="10"
            // playsInline
            muted=""
            // class="mntl-gif__video universal-image__image"
            width="300"
            height="300"
            aria-label="Please (sign language animation)"
            data-srcset-webm="https://www.parents.com/thmb/9xvqN43SuBOxvwaDhgX4naiQ4ZQ=/750x0/filters:gifv(webm)/ss_100487395_ani-d7946f9a38da4a69b6d3959c9fc87dad.gif 750w"
            data-sizes="750px"
            data-tracking-container="true"
            data-img-lightbox="false"
            data-click-tracked="true"
            data-src="https://www.parents.com/thmb/9xvqN43SuBOxvwaDhgX4naiQ4ZQ=/750x0/filters:gifv(webm)/ss_100487395_ani-d7946f9a38da4a69b6d3959c9fc87dad.gif"
            src="https://www.parents.com/thmb/9xvqN43SuBOxvwaDhgX4naiQ4ZQ=/750x0/filters:gifv(webm)/ss_100487395_ani-d7946f9a38da4a69b6d3959c9fc87dad.gif"
          ></video>
        </div>
        <div>Help</div>
      </div>
    </>
  );
}

export default Contentgesture;
