// import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Landing from "./assets/components/Landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./assets/components/Landing";
import Learning from "./assets/components/Learning";
import Video from "./assets/components/Video";
import Practice from "./assets/components/Practise";
import Course from "./assets/components/Course";
import Card from "./assets/components/Card";
import Content from "./assets/components/Content";
import Login from "./assets/components/Login";
import Animation from "./assets/components/Animation";
import Contentgesture from "./assets/components/Contentgesture";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Learning" element={<Card />} />
          <Route path="/Practice" element={<Practice />} />
          {/* <Route path="/Course" element={<Course />} /> */}
          <Route path="/Contentgesture" element={<Contentgesture />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/a" element={<Animation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import HandGestureRecognition from "./assets/components/HandGestureRecognition";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hand Gesture Recognition</h1>
//         <HandGestureRecognition />
//       </header>
//     </div>
//   );
// }

// export default App;
