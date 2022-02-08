import React, {FC, useEffect, useRef} from "react";
import Social from "./Social";

import gsap from "gsap";

interface AboutProps {
  title: string;
}



const HomeAbout: FC<AboutProps> = ({title, children}) => {

    const about_element = useRef(null);

    useEffect( () => {
      gsap.from(about_element.current, {
        opacity: 0,
        duration: 1.5,
        y: -100
      });
    });

    return (
        <div className="m-auto m-10">
          <div ref={about_element}>
            <h1 className="font-bold text-2xl whitespace-pre text-white">- {title} -</h1>
            <p className="text-2xl text-white"> {children} </p>
          </div>

          <Social
            title="SOCIAL"
            github_url="https://github.com/storrealbac"
            linkeding_url="#"
            instagram_url="#"
          />
        </div>
    );
}

export default HomeAbout;