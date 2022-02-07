import React, {FC} from "react";
import Social from "./Social";

interface AboutProps {
  title: string;
}

const HomeAbout: FC<AboutProps> = ({title, children}) => {
    return (
        <div className="m-auto m-10">
          <div id="about_me">
            <h1 className="font-bold text-2xl whitespace-pre text-white">- {title} -</h1>
            <p className="text-2xl text-white">
              {children}
            </p>
          </div>
          <Social title="SOCIAL"/>
        </div>
    );
}

export default HomeAbout;