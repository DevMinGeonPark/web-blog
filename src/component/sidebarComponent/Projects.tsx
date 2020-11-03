import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, SubMenu } from 'react-pro-sidebar';



const Projects: React.FC = () => {
    return (
        <SubMenu title="Projects">
            <SubMenu title="C#">
                <MenuItem><Link to="/projects/c-shap/black-toon-manger">BlackToonManger</Link></MenuItem>
            </SubMenu>
            <SubMenu title="Typescript">
                <MenuItem><Link to="/projects/typescript/blog">MyBlog</Link></MenuItem>
            </SubMenu>
            <SubMenu title="Python">
                <MenuItem><Link to="/python/image-manger">ImageManger With Python Seleminum</Link></MenuItem>
            </SubMenu>
        </SubMenu>
    );
}
export default Projects;