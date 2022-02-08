import React, { FC, useEffect, useRef } from "react";
import gsap from "gsap";

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
            <h1 ref={name_element} className="font-montserrat text-white font-black text-5xl md:text-8xl xl:text-9xl text-left">
                {name}
            </h1>
            <h1 ref={lastname_element} className="font-montserrat text-white font-black text-5xl md:text-8xl xl:text-9xl text-right">
                {lastname}
            </h1>
        </div>
    );
}

export default HomeFullname;