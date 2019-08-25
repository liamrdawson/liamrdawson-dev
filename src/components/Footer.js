import React from 'react';
import SvgGitHub from '../icons/GitHub';
import SvgTwitter from '../icons/Twitter';
import SvgLinkedin from '../icons/Linkedin';


function Footer() {
    return (
        <footer>
            <div className="link-icons">
                <a href="https://github.com/liamrdawson"><SvgGitHub className="sm-icon"/></a>
                <a  href="https://twitter.com/LiamRDawson"><SvgTwitter className="sm-icon"/></a>
                <a href="https://www.linkedin.com/in/liamrdawson/"><SvgLinkedin className="sm-icon"/></a>
            </div>
        </footer>
    )
}

export default Footer;