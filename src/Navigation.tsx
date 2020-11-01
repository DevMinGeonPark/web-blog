import React from 'react';
import Main from './component/Main';
import ReactCondingConvention from './component/Post/React/CondingConvention';
import BlackToonManger from './component/Projects/Cshap/BlackToonManger';
import ImageManger from 'component/Projects/Python/ImageManger';
import { Switch, Route, Redirect } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <Switch>
            <Route path="/Blog" exact component={Main} />
            <Route path="/Blog/projects/c-shap/black-toon-manger" exact component={BlackToonManger} />
            <Route path="/Blog/python/image-manger" exact component={ImageManger} />
            <Route path="/Blog/react/conding-convention" exact component={ReactCondingConvention} />
            <Redirect path="*" to="/Blog" />
        </Switch>
    );
}
export default Navigation;