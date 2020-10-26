import React from 'react';
import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'style/Style.scss';


const App: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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