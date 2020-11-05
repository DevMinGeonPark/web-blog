import React from 'react';
import Main from './component/Main';
import Profile from './component/mainComponent/Profile'
import ReactCondingConvention from './component/post/react/CondingConvention';
import BlackToonManger from './component/projects/cShap/BlackToonManger';
import ImageManger from 'component/projects/python/ImageManger';
import Blog from 'component/projects/typescript/Blog';
import { Switch, Route, Redirect } from 'react-router-dom';
import BasicSyntax from 'component/post/javascript/BasicSyntax';

const Navigation: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/projects/c-shap/black-toon-manger" exact component={BlackToonManger} />
            <Route path="/projects/typescript/blog" exact component={Blog} />
            <Route path="/python/image-manger" exact component={ImageManger} />
            <Route path="/react/conding-convention" exact component={ReactCondingConvention} />
            <Route path="/post/javascript/basicsyntax-1" exact component={BasicSyntax} />
            <Redirect path="*" to="/" />
        </Switch>
    );
}
export default Navigation;