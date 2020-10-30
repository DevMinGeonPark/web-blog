import React from 'react';
import { Link } from 'react-router-dom';

const Posts: React.FC = () => {
    return (
        <>
        <h2>Posts</h2>
        <div className="outline">
            <h3>Javscript</h3>
            <ul>
                <li>Basic Syntax</li>
            </ul>
            <h3>React</h3>
            <ul>
                <li><Link to="/ReactCondingConvention">Coding Convention</Link></li>
            </ul>
        </div>
        </>
    );
}
export default Posts;