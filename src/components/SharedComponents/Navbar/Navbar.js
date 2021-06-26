import React, {useState} from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    
    const [toggle, setToggle] = useState(false)
    
    return (
        <div className="h-20 md:h-32 w-full bg-white">
            <div className="h-full flex justify-between items-center px-12">
                <a className="text-2xl font-bold" href="">RetroBlogger</a>
                <div>
                    <div className="md:block" id={toggle ? "toggleDisplay" : "toggleNone"}>
                        <a className="md:ml-12 font-bold text-gray-500 md:text-base 2xl:text-lg hover:text-black" href=""
                        >Home</a>
                        <a className="md:ml-12 font-bold text-gray-500 md:text-base 2xl:text-lg hover:text-black" href=""
                        >Blog</a>
                        <a className="md:ml-12 font-bold text-gray-500 md:text-base 2xl:text-lg hover:text-black" href=""
                        >About</a>
                        <a className="md:ml-12 font-bold text-gray-500 md:text-base 2xl:text-lg hover:text-black" href=""
                        >Service</a>
                        <a className="mb-5 md:ml-12 font-bold text-gray-500 md:text-base 2xl:text-lg hover:text-black" href=""
                        >Contact</a>
                    </div>
                </div>
                <div className="block md:hidden">
                    {toggle ? <span onClick={() => setToggle(false)}><FontAwesomeIcon icon={faTimes} /></span> :
                        <span onClick={() => setToggle(true)}><FontAwesomeIcon icon={faBars} /></span>}
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;