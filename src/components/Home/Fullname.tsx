import React, { FC, useEffect, useRef } from "react";

import gsap from "gsap";
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


interface HomeFullnameProps {
    name: string;
    lastname: string;
}

const HomeFullname: FC<HomeFullnameProps> = ({name, lastname}): JSX.Element => {


    const name_element = useRef(null);
    const lastname_element = useRef(null);

    useEffect( () => {
        gsap.from(name_element.current, {
            opacity: 0,
            duration: 1.5,
            x: -100
        });

        gsap.from(lastname_element.current, {
            opacity: 0,
            duration: 1.5,
            x: 100
        });
    });

    return (
        <div className="w-full p-10">
            <Tween
            to={{
                x: '-100vw',
                scrollTrigger: {
                    trigger: "#name_element",
                    start: "top top",
                    scrub: 0.5,
                }
            }}>
                <h1 id="name_element" ref={name_element} className="font-montserrat text-white font-black text-5xl md:text-8xl xl:text-9xl text-left">
                    {name}
                </h1>
            </Tween>

            <Tween
            to={{
                x: '-100vw',
                scrollTrigger: {
                    trigger: ["#name_element", "#lastname_element"],
                    start: "top top",
                    scrub: 0.5,
                }
            }}>
                <h1 id="lastname_element" ref={lastname_element} className="font-montserrat text-white font-black text-5xl md:text-8xl xl:text-9xl text-right">
                    {lastname}
                </h1>
            </Tween>
        </div>
    );
}

export default HomeFullname;