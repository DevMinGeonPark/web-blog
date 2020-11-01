import React from 'react';
import Main from './component/Main';
import ReactCondingConvention from './component/Post/React/CondingConvention';
import BlackToonManger from './component/Projects/Cshap/BlackToonManger';
import ImageManger from 'component/Projects/Python/ImageManger';
import { Switch, Route, Redirect } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/projects/c-shap/black-toon-manger" exact component={BlackToonManger} />
            <Route path="/python/image-manger" exact component={ImageManger} />
            <Route path="/react/conding-convention" exact component={ReactCondingConvention} />
            <Redirect path="*" to="/" />
        </Switch>
    );
}
export default Navigation;