import React from 'react';
import { Link } from 'react-router-dom';
import { BsLink45Deg } from 'react-icons/bs';


const Posts: React.FC = () => {
    return (
        <div className="posts">
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
                        <li><Link to="/react/conding-convention">Coding Convention<BsLink45Deg /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Posts;