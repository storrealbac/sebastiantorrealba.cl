import React, { FC } from "react";

interface HomeFullnameProps {
    name: string;
    lastname: string;
}

const HomeFullname: FC<HomeFullnameProps> = ({name, lastname}): JSX.Element => {
    return (
        <div className="m-auto">
            <h1 className="font-montserrat text-white font-black text-7xl xl:text-9xl text-left">
                {name}
            </h1>
            <h1 className="font-montserrat text-white font-black text-7xl xl:text-9xl text-right">
                {lastname}
            </h1>
        </div>
    );
}

export default HomeFullname;