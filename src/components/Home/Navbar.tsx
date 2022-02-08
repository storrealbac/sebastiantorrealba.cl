import React, {FC, useEffect} from "react";
import gsap from "gsap";
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface NavbarProps  {

    options: string[];

}

const Navbar: FC<NavbarProps> = ({options}) => {

    useEffect( () => {
        options.forEach( (label, i) => {
            gsap.from(`#navbar-option-${i}`, {
                y: 100,
                duration: (i/2)+1
            });
        });
    });

    let navbar_options = options.map( (label, i) => {
        return (
            <button key={`${label}`} id={`navbar-option-${i}`}>
                <h1 key={`${label}-${i}`} className="text-3xl m-auto whitespace-nowrap mx-10 text-center text-white font-bold">
                    - {label} -
                </h1>
            </button>
        );
    });

    return(
        <Tween
        to={{
          y: '25vh',
          scrollTrigger: {
            trigger: "#social_element",
            start: "top top",
            scrub: 0.5,
          }
        }}>
        <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-4 content-center text-center`}>
            {navbar_options}
        </div>
        </Tween>
    );
}

export default Navbar;