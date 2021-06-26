import React from 'react';
import './InstaBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const InstaBanner = () => {
    return (
        <section className="mt-10">
            <p className="text-center text-3xl font-bold text-gray-400">follow me on insta</p>
            <div className="flex justify-center">
                <div className="instaBanner w-3/4 h-64 sm:h-72 2xl:h-96 flex justify-center items-center mt-10">
                    <div className="instaBlack w-4/5 h-3/4 rounded-lg">
                        <div class="instaWhite text-3xl text-black font-bold w-full h-full rounded-lg flex flex-col md:flex-row justify-center items-center">
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <p className="ml-3">@janesmith</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstaBanner;