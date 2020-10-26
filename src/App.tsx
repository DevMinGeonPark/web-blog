import React from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Redirect path="*" to="/"/>
                </Switch>
                <Footer></Footer>
            </>
        </BrowserRouter>
    );
}
export default App;