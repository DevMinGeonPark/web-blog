import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    return (
        <>
            <h2>Projects</h2>
            <div className="outline">
                <h3>C#</h3>
                <ul>
                    <li><Link to="/projects/c-shap/black-toon-manger">BlackToonManger</Link></li>
                </ul>
                <h3>Typescript</h3>
                <ul>
                    <li>Blog</li>
                </ul>
                <h3>Python</h3>
                <ul>
                    <li>PythonImageManger With Seleminum</li>
                </ul>
            </div>
        </>
    );
}
export default Projects;