import React from "react";

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar closed">
            <div className="sidebar-inner">
                <div className="sidebar-layout">
                    <ul>
                        <li className="menu-item">components</li>
                        <li className="menu-item">components</li>
                    </ul>
                </div>
            </div>          
        </aside>
    );
}
export default Sidebar;
