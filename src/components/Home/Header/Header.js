import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className="headerSection">
            <div className="headerCover flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">Retro Blogging Team</h1>
                    <p className="text-large text-gray-200 mt-5 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptate.</p>
                    <a className="bg-yellow-500 rounded-lg px-5 py-3" href="">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Header;