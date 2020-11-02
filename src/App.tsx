import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Posts from './component/sidebarComponent/Posts';
import Projects from 'component/sidebarComponent/Projects';
import Navigation from './Navigation';
import { HashRouter } from 'react-router-dom';
import { ProSidebar, Menu } from 'react-pro-sidebar';
import './scss/Style.scss';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Header />
            <div className="sidebar-mask" />
            <ProSidebar>
                <Menu iconShape="square">
                    <Projects/>
                    <Posts />
                </Menu>
            </ProSidebar>
            <Navigation />
            <Footer />
        </HashRouter>
    );
}
export default App;