import React from 'react';
import BlogSidebar from '../BlogSidebar/BlogSidebar/BlogSidebar'
import i1 from '../../../../images/Home/i1.jpg'
import i3 from '../../../../images/Home/i3.jpg'
import i4 from '../../../../images/Home/i4.jpg'
import i5 from '../../../../images/Home/i5.jpg'
import i2 from '../../../../images/Home/i2.jpg'

const blogPost = [
    {
        img: i1,
        title: '9 Most Awesome Blue Lake With Snow Mountain',
        desc: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia....',
        time: 'NOVEMBER 3, 2018',
        topic: 'Travel',
        owner: 'Jane smith',
    },
    {
        img: i3,
        title: '8 Ways To Travel Like a Pro',
        desc: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia....',
        time: 'OCTOBER 26, 2018',
        topic: 'Travel',
        owner: 'Jane smith',
    },
    {
        img: i4,
        title: '5 Beginner Photographer’s Mistakes',
        desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic...',
        time: 'NOVEMBER 3, 2018',
        topic: 'Photography',
        owner: 'Jane smith',
    },
    {
        img: i5,
        title: '10 Most Awesome Breathtaking Places',
        desc: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia....',
        time: 'NOVEMBER 3, 2018',
        topic: 'Travel',
        owner: 'Jane smith',
    },
    {
        img: i2,
        title: '10 Best Way to Styling Your Food',
        desc: 'I neglect my talents Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia....',
        time: 'NOVEMBER 3, 2018',
        topic: 'Food',
        owner: 'Jane smith',
    }
]



const Blog = () => {
    return (
        <section className="flex justify-center">
            <div className="w-11/12 grid md:grid-cols-3 mt-5">
                <div className="md:col-start-1 md:col-end-3">
                    {
                        blogPost.map((blog) => (
                            <div>
                                <div className="h-64 sm:h-72 2xl:h-96 overflow-hidden flex justify-center items-center rounded-lg md:rounded-none mt-10">
                                    <img className="" src={blog.img} alt="" />
                                </div>
                                <div className="mt-5">
                                    <div className="flex justify-between">
                                        <a className="text-2xl font-bold text-blue-900" href="">{blog.title}</a>
                                        <h1 className="text-gray-400">{blog.topic}</h1>
                                    </div>
                                    <h1 className="mt-3 text-lg font-semibold text-red-500">{blog.owner}</h1>
                                    <p className="mt-3">{blog.desc}</p>
                                    <p className="text-right mb-4 text-gray-400">{blog.time}</p> <hr />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="mb-10 sm:mt-5 md:mt-10 bg-white md:ml-3 rounded-lg">
                    <BlogSidebar />
                </div>
            </div>
        </section>
    );
};

export default Blog;