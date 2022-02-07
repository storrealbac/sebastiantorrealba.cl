import React from 'react';
//import './App.css';

import HomeFullname from "./components/Home/Fullname";
import HomeAbout from "./components/Home/About";

function App() {
  return (
    <div className="grid grid-cols-1 place-items-center h-screen w-screen">
      <div className="grid grid-cols-1 2xl:grid-cols-2 z-5">
        <HomeFullname name="SEBASTIÁN" lastname="TORREALBA"/>
        <HomeAbout title="ABOUT"> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quaerat quam excepturi laboriosam deserunt laborum,
            vero consequatur natus quibusdam maxime. Perferendis
            ipsum provident corrupti impedit! Voluptatem quae odio
            voluptates non voluptate.
        </HomeAbout>
    </div>
  </div>
  );
}

export default App;
