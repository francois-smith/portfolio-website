import React, {useState} from 'react';
import logo from '../Media/Images/Logo-Main.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav id="Navigation">
            <div id="Navigation-Logo">
                <img src={logo} alt="Main Logo"/>
            </div>
            <div id="Navigation-Links">
                <li>
                    <a href='#'>
                        Projects
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Technologies
                    </a>
                </li>
                <li>
                    <a href='#'>
                        About
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Contact
                    </a>
                </li>
            </div>
            <div id='Navigation-Socials'>
                <a href='https://github.com/francois-smith'>
                    <AiFillGithub></AiFillGithub>
                    Github
                </a>
                <a href=''>
                    <AiFillInstagram></AiFillInstagram>
                    Instagram
                </a>
                <a href='https://www.linkedin.com/in/francois-smith-b02609210/'>
                    <AiFillLinkedin></AiFillLinkedin>
                    LinkedIn
                </a>
            </div>
        </nav>
    );
};

export default Header;
