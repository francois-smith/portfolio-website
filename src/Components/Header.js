import React, {useState} from 'react';
import logo from '../Media/Images/Logo-Main.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav id="Navigation">
            <div id="Navigation-Logo">
                <img src={logo} rel="Main Logo"/>
            </div>
            <div id="Navigation-Links">
                <li>Projects</li>
                <li>Technologies</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div id='Navigation-Socials'>
                <a href=''>
                    <AiFillInstagram></AiFillInstagram>
                </a>
                <a href='https://github.com/francois-smith'>
                    <AiFillGithub></AiFillGithub>
                </a>
                <a href=''>
                    <AiFillLinkedin></AiFillLinkedin>
                </a>
            </div>
        </nav>
    );
};

export default Header;
