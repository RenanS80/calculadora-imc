import Linkedin from '../../assets/img/linkedin.svg'
import Github from '../../assets/img/github.svg'

import './styles.css';

function Footer() {
    return (
        <footer>
            <div className="credits">
                <p>@ 2022 - Renan Soares</p>
            </div>
            <div className="contact">
                <a href="https://www.linkedin.com/in/renansoaresf/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                </a>

                <a href="https://github.com/renans80" target="_blank" rel="noreferrer">
                    <img src={Github} alt="Github" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;