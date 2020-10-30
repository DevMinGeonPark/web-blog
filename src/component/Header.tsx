import React, { useState, useEffect } from 'react';
import { BsList, BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [open, setOpen] = useState(true);
    const [searchOpen, setSearchOpen] = useState(true);

    useEffect(() => {
        const sidebar = document.getElementsByClassName('pro-sidebar-inner')[0];
        open ?  sidebar.classList.add('closed'):sidebar.classList.remove('closed');
        const searchBox = document.querySelector('input');
        searchOpen ? searchBox?.classList.remove('focus') : searchBox?.classList.add('focus');
    })

    return (
        <header className="navbar">
            <div className="sidebar-button" onClick={() => setOpen(!open)}>
                <BsList size="25px" color="black" role="img" className="icon" />
            </div>
            <Link to="/">
                <div className="profile">
                    <figure>
                        <img src="https://s3.ivisa.com/website-assets/blog/id-photo2.jpg" 
                        alt="profile" />
                    </figure>
                    <div>
                        <strong>Dev MinGeonPark</strong>
                        <em>Stay hungry Stay Foolish</em>
                    </div>
                </div>
            </Link>
            <div className="links">
                <div className="search-box">
                    <input aria-label="Search" autoComplete="off" placeholder="아직 구현되지 않았습니다." onClick={() => setSearchOpen(!searchOpen)} />
                </div>
                <nav className="nav-links">
                    <div className="nav-item">
                        <Link to="/" className="home-non-nide">Home</Link></div>
                    <div className="nav-item ">
                        <a href="https://github.com/DevMinGeonPark?tab=repositories"
                            target="_block"
                            className="can-hide">
                            Repository
                            <BsLink45Deg />
                        </a></div>
                </nav>
            </div>
        </header>
    );
}
export default Header;