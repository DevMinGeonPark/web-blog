import React, { useState, useEffect } from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import ProfilePage from './component/ProfilePage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'style/Style.scss';

const App: React.FC = () => {
    return (
        <BrowserRouter basename={"/Blog"}>
            <>
                <Header></Header>
                <div className="sidebar-mask"/>
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem>Dashboard</MenuItem>
                        <SubMenu title="Components">
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </ProSidebar>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/Profile" exact component={ProfilePage} />
                    <Redirect path="*" to="/" />
                </Switch>
                <Footer></Footer>
            </>
        </BrowserRouter>
    );
}
export default App;