import React from 'react';
import { Link } from 'react-router-dom';
import { BsLink45Deg } from 'react-icons/bs';


const Projects: React.FC = () => {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <div className="outline">
                <div className="outline-item">
                    <h3>C#</h3>
                    <ul>
                        <li><Link to="/projects/c-shap/black-toon-manger">BlackToonManger<BsLink45Deg /></Link></li>
                    </ul>
                </div>
                <div className="outline-item">
                    <h3>Typescript</h3>
                    <ul>
                        <li><Link to="/projects/typescript/blog">Blog<BsLink45Deg /></Link></li>
                    </ul>
                </div>
                <div className="outline-item">
                    <h3>Python</h3>
                    <ul>
                        <li><Link to="/python/image-manger">ImageManger With Python Seleminum<BsLink45Deg /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Projects;