import React, {FC, useEffect, useRef} from "react";
import Social from "./Social";

import gsap from "gsap";
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
      <Tween
        to={{
          x: '-100vw',
          scrollTrigger: {
            trigger: "#social_element",
            start: "top top",
            scrub: 0.5,
          }
      }}>
        <div id="social_element" className="m-auto">
          <div ref={about_element} className="h-full">
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
      </Tween>
  );
}

export default HomeAbout;