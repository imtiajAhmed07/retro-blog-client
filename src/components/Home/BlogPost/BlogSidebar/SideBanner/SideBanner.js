import React from 'react';
import './SideBanner.css'

const SideBanner = () => {
    return (
        <div className="px-3 mt-10">
            <div className="sideBanner text-white flex justify-center items-center flex-col">
                <h1 className="text-2xl font-bold  ">Jane Smith</h1>
                <p className="mt-4">Thank's for visiting me...</p>
            </div>
        </div>
    );
};

export default SideBanner;