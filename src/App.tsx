import React from "react";

import HomeFullname from "./components/Home/Fullname";
import HomeAbout from "./components/Home/About";
import Navbar from "./components/Home/Navbar";

const App = () => {

  const navbar_options = ["PROJECTS", "ACHIEVEMENTS", "INTERESTED IN", "CONTACT ME"];

  return (
    <>
      <div className="grid place-items-center h-screen">
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

        <div className="grid grid-cols-1 place-items-center">
          <Navbar options={navbar_options}/>
        </div>

      </div>
    <div className="h-screen">
      
    </div>
  </>
  );
}

export default App;