import React from 'react';
import { Link } from 'react-router-dom';

const Posts: React.FC = () => {
    return (
        <>
            <h2>Posts</h2>
            <div className="outline">
                <div className="outline-item">
                    <h3>Javscript</h3>
                    <ul>
                        <li>Basic Syntax</li>
                    </ul>
                </div>
                <div className="outline-item">
                    <h3>React</h3>
                    <ul>
                        <li><Link to="/react/conding-convention">Coding Convention</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Posts;