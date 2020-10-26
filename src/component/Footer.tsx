import React from 'react';
import 'style/Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="mainFooter">
            <div className="container">
                <p><strong>Copyright © 2020 All Right</strong><em> MinGeonPark</em></p>
                <p>
                    <a href="test">GitHub  .  </a>
                    <a href="test">Repository</a>
                </p>
            </div>
        </footer>
    );
}
export default Footer;