import React from 'react';
//import { Link } from 'react-router-dom';
import { MenuItem, SubMenu } from 'react-pro-sidebar';

const Posts: React.FC = () => {
    return (
            <SubMenu title="Posts">
                <SubMenu title="Javscript">
                    <MenuItem>Javscript Basic Syntax</MenuItem>
                </SubMenu>
                <SubMenu title="React">
                    <MenuItem>React convention</MenuItem>
                </SubMenu>
                <SubMenu title="Scss">
                    <MenuItem>Scss convention</MenuItem>
                </SubMenu>
                <SubMenu title="C#">
                    <MenuItem>C# Convention</MenuItem>
                </SubMenu>
            </SubMenu>
    );
}
export default Posts;