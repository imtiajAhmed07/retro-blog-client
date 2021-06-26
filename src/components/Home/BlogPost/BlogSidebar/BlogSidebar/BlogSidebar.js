import React from 'react';
import Podcast from '../Podcast/Podcast';
import SideBanner from '../SideBanner/SideBanner';
import SideGallery from '../SideGallery/SideGallery';

const BlogSidebar = () => {
    return (
        <>
            <Podcast />
            <SideBanner />
            <SideGallery />
        </>
    );
};

export default BlogSidebar;