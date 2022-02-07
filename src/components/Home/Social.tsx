import React, {FC} from 'react';

import GithubLogo from "./Icons/github.svg";
import InstagramLogo from "./Icons/instagram.svg";
import LinkedinLogo from "./Icons/linkedin.svg";

interface SocialProps {
    title: string;
    instagram_url: string;
    github_url: string;
    linkeding_url: string;
}

const Social: FC<SocialProps> = ({title, instagram_url, github_url, linkeding_url}) => {
    return (
        <div className="grid grid-cols-1 place-items-center text-white">
            <h1 className="font-bold text-2xl mt-10 text-center whitespace-pre">
                - {title} -
            </h1>

            <div className="grid grid-cols-3 place-items-center w-44">

                <a href={instagram_url} className="mx-4 h-8 w-8 fill-white">
                    <img src={InstagramLogo} alt="Instagram Logo" />
                </a>

                <a href={linkeding_url} className="mx-4 h-8 w-8 fill-white">
                    <img src={LinkedinLogo} alt="Linkedin Logo"/>
                </a>

                <a href={github_url} className="mx-4 h-8 w-8">
                    <img src={GithubLogo} alt="Github Logo"/>
                </a>
            </div>

        </div>
    );
}

export default Social;