import React from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import ReactCondingConvention from './component/Post/React/CondingConvention';
import BlackToonManger from './component/Projects/C#/BlackToonManger';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'style/Style.scss';

const App: React.FC = () => {
    return (
        <BrowserRouter basename={"/Blog"}>
            <Header />
            <div className="sidebar-mask" />
            <ProSidebar>
                <Menu iconShape="square">
                    <SubMenu title="Projects">
                        <SubMenu title="C#">
                            <MenuItem>BlackToonManger</MenuItem>
                        </SubMenu>
                        <SubMenu title="Typescript">
                            <MenuItem>MyBlog</MenuItem>
                        </SubMenu>
                        <SubMenu title="Python">
                            <MenuItem>PythonImageManger With Seleminum</MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu title="Posts">
                        <SubMenu title="Javscript">
                            <MenuItem>Javscript Basic Syntax</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </ProSidebar>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/projects/c-shap/black-toon-manger" exact component={BlackToonManger} />
                <Route path="/react/conding-convention" exact component={ReactCondingConvention} />
                <Redirect path="*" to="/" />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
export default App;