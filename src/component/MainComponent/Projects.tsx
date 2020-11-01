import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <div className="outline">
                <div className="outline-item">
                    <h3>C#</h3>
                    <ul>
                        <li><Link to="/projects/c-shap/black-toon-manger">BlackToonManger</Link></li>
                    </ul>
                </div>
                <div className="outline-item">
                    <h3>Typescript</h3>
                    <ul>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="outline-item">
                    <h3>Python</h3>
                    <ul>
                        <li><Link to="/python/image-manger">ImageManger With Python Seleminum</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Projects;