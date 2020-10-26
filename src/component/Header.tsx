import React from 'react';
import {BiLinkExternal} from 'react-icons/bi';

const Header: React.FC = () => {
    return (
        <header>
            <div className="sidebar-button"></div>
            <a href="1">test</a>
            <div className="links">
                <div className="search-box">
                    <input type="text"/>
                </div>
                <nav className="nav-links">
                    <div className="nav-item">Home</div>
                    <div className="nav-item"><a href="">Repository<BiLinkExternal/></a></div>
                </nav>
            </div>
        </header>
    );
}
export default Header;