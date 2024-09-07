// import React from "react";

import { useState } from "react";
import Navbar from "./Navbar";

function Content() {
  const images = [
    {
      id: 1,
      title: "A",
      src: "https://lirp.cdn-website.com/dcc864fc/dms3rep/multi/opt/a-sign-language-4561deac-cfdedd5a-1920w.jpg",
      description:
        "﻿To represent the letter A using sign language, extend your dominant hand with fingers closed into a fist, and position it in front of you, facing outward. Within this fist, the thumb is raised and positioned alongside the side of the fist. This handshape resembles a lowercase 'a' rotated upside down, where the upright thumb acts as a visual reminder of the serif that extends from the side of the small letter 'a'.",
    },
    {
      id: 2,
      title: "B",
      src: "https://lirp.cdn-website.com/dcc864fc/dms3rep/multi/opt/b-sign-language-2b0c5933-bf9b0829-1920w.jpg",
      description:
        "To convey the letter B in sign language, use your dominant hand by extending all four fingers upright, pressed firmly together, with the palm facing outward. Simultaneously, tuck your thumb securely into the palm of your hand. This handshape bears a resemblance to the lowercase letter 'b', as the four standing fingers represent the vertical line, while the tucked thumb symbolizes the round part of the small letter 'b'.",
    },
    {
      id: 3,
      title: "C",
      src: "https://lirp.cdn-website.com/dcc864fc/dms3rep/multi/opt/c-sign-language-bb8d77d2-f2fa30e6-1920w.jpg",
      description:
        "To signify the letter C in sign language, shape your dominant hand into an open position. Then, gently curve your hand, mimicking the rounded shape of the letter 'C'. Ensure that the top four fingers are held together, forming the upper curve, while the thumb forms the lower curve. This hand configuration visually resembles the letter 'C', with the top curve created by the aligned fingers and the bottom curve represented by the positioned thumb.",
    },
    {
      id: 4,
      title: "D",
      src: "https://lirp.cdn-website.com/dcc864fc/dms3rep/multi/opt/d-sign-language-42c327b8-4712cc47-1920w.jpg",
      description:
        "To represent the letter D in sign language, raise your dominant hand with the palm facing outward. Next, curve your middle, ring, and pinkie fingers, bringing them together to touch your thumb. At the same time, keep your index finger upright and extended. This hand configuration closely resembles the lowercase letter 'd', where the curved fingers symbolize the rounded part of the letter, while the upright index finger represents the straight vertical line.",
    },
    {
      id: 5,
      title: "E",
      src: "https://lirp.cdn-website.com/dcc864fc/dms3rep/multi/opt/e-sign-language-ddf0e9dc-c74af13b-1920w.jpg",
      description:
        "To signify the letter E in sign language, raise your dominant hand with the palm facing outward. Then, bring together the top four fingers of your hand, tightly touching each other, and curl them inward. Simultaneously, curve your thumb tightly and tuck it into your palm, allowing it to touch the tips of the fingers above. This hand configuration closely resembles the lowercase letter 'e', where the curved fingers and tucked thumb mimic the rounded shape of the letter 'e'.",
    },
    {
      id: 6,
      title: "F",
      src: "https://lirp.cdn-website.com/dcc864fc/dms3rep/multi/opt/f-sign-language-17795960-95b4d8f7-1920w.jpg",
      description:
        "﻿To represent the letter F in sign language,Use one hand and bring the tip of your index finger to touch the tip of your thumb, forming a circular shape.Simultaneously, keep your pinky, middle finger, and index finger extended and standing straight up. Make sure they are separated from one another, not touching.",
    },
    {
      id: 7,
      title: "G",
      src: "https://lirp.cdn-website.com/dcc864fc/dms3rep/multi/opt/g-sign-language-3975453b-3916190c-1920w.jpg",
      description:
        "﻿To represent the letter G in sign language,Extend your dominant hand into a fist, with the knuckles aligned vertically Keep your middle, ring, and pinkie fingers curled inward toward the palm of your hand. Extend your index finger and thumb straight out, positioned parallel to each other.",
    },
  ];

  const [currentId, setCurrentId] = useState(1);

  const currentIndex = images.findIndex((image) => image.id === currentId);

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentId(images[prevIndex].id);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentId(images[nextIndex].id);
  };

  return (
    <>
      <Navbar />
      <h1 className="ml-10">Progess</h1>
      <progress
        className="progress progress-primary bg-gray-400    ml-10 w-[1440px] "
        value="10"
        max="100"
      ></progress>
      <div className="flex pt-10 pl-5 pr-5  ">
        <div className="w-1/2  h-96  ">
          <img
            src={images[currentIndex].src}
            alt="A"
            className="bg-container h-96 m-auto  rounded-full "
          />
        </div>
        <div className="mt-10 w-1/2">
          <h1 className="text-4xl font-semibold mb-5">
            {images[currentIndex].title}
          </h1>
          <p className="text-xl pr-5 text-justify">
            {images[currentIndex].description}
          </p>
        </div>
      </div>
      <div className="join grid grid-cols-2 w-80 m-auto mt-20">
        <button className="join-item btn btn-outline" onClick={goToPrevious}>
          Previous{" "}
        </button>
        <button className="join-item btn btn-outline" onClick={goToNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default Content;
