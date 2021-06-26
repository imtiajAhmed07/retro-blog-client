import React from 'react';
import Navbar from '../../SharedComponents/Navbar/Navbar'
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';
import BlogPost from '../BlogPost/Blog/Blog';
import InstaBanner from '../InstaBanner/InstaBanner';

const Home = () => {
    return (
        <>
            <Navbar />
           <Header /> 
           <HomeAbout />
           <BlogPost />
           <InstaBanner />
        </>
    );
};

export default Home;