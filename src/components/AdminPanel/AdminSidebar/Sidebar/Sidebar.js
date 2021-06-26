import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData/SidebarData';

const Sidebar = () => {
    return (
        <section>
            <div className="w-72 h-screen bg-gray-400">
                {
                    SidebarData.map((item) => (
                        <Link className="flex pl-5 text-lg font-bold items-center hover:bg-white w-full h-16" to={item.path}>
                            <p>{item.icon}</p>
                            <p className="ml-3">{item.title}</p>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};

export default Sidebar;