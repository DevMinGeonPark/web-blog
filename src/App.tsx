import React, { useState, useEffect } from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'style/Style.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const App: React.FC = () => {
    return (
        <BrowserRouter basename={"/Blog"}>
            <>
                <Header></Header>
                <div className="sidebar-mask"/>
                <ProSidebar className="sidebar closed" >
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
                    <Redirect path="*" to="/" />
                </Switch>
                <Footer></Footer>
            </>
        </BrowserRouter>
    );
}
export default App;