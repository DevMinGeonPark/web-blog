import React, {useState,useEffect}from 'react';
import { BsList, BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'style/Header.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "style/App.scss";

const Header: React.FC = () => {
    const [open,setOpen] = useState(false);

    useEffect(() => {
        var a = document.getElementsByClassName('sidebar')[0];
        open? a.classList.remove('closed'):a.classList.add('closed');
    })

    return (
        <header className="navbar">
            <div className="sidebar-button" onClick={() => setOpen(!open)}><BsList size="25px" color="black" /></div>
            <a href="1">
                <figure>
                    <img src="https://s3.ivisa.com/website-assets/blog/id-photo2.jpg" alt="profile" />
                </figure>
                <div>
                    <strong>Dev MinGeonPark</strong>
                    <em>Stay hungry Stay Foolish</em>
                </div>
            </a>
            <div className="links">
                <div className="search-box">
                    <input aria-label="Search" autoComplete="off" />
                </div>
                <nav className="nav-links">
                    <div className="nav-item">
                        <Link to="/">Home</Link></div>
                    <div className="nav-item"><a href="https://github.com/DevMinGeonPark?tab=repositories" target="_block">Repository<BsLink45Deg /></a></div>
                </nav>
            </div>
        </header>
    );
}
export default Header;