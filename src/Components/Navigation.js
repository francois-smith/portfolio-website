import React, {useState} from 'react';
import logo from '../Media/Images/Logo-Main.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav id="Navigation">
            <div id="Navigation-Links">
                <a href='/'><img src={logo} alt="Main Logo"/></a>
                <li>
                    <a href='#ProjectsHeader'>
                        Projects
                    </a>
                </li>
                <li>
                    <a href='#TechnologiesHeader'>
                        Technologies
                    </a>
                </li>
                <li>
                    <a href='#AboutHeader'>
                        About
                    </a>
                </li>
                <li>
                    <a href='#ContactHeader'>
                        Contact
                    </a>
                </li>
            </div>
            <div id='Navigation-Socials'>
                <a href='https://github.com/francois-smith'>
                    <span class="Social-Text">Github</span>
                    <AiFillGithub className='svg_icon'></AiFillGithub>
                </a>
                <a href='https://instagram.com/_francois.smith_'>
                    <span class="Social-Text">Instagram</span>
                    <AiFillInstagram className='svg_icon'></AiFillInstagram>              
                </a>
                <a href='https://www.linkedin.com/in/francois-smith-b02609210/'>
                    <span class="Social-Text">LinkedIn</span>
                    <AiFillLinkedin className='svg_icon'></AiFillLinkedin>
                </a>
            </div>
        </nav>
    );
};

export default Header;
