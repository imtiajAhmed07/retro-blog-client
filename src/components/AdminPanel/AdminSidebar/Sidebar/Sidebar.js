import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData/SidebarData';

const Sidebar = () => {
    
    

    return (
        <section className="hidden md:block fixed">
            <div className="w-64 h-screen bg-gray-100">
                {
                    SidebarData.map((item) => (
                        <Link className="flex pl-5 text-base font-medium items-center hover:bg-gray-200 w-full h-14" to={item.path}>
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