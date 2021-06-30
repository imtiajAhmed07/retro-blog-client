import React, {useState} from 'react';
import aboutProfile from '../../../../../images/Home/aboutProfile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const blogList = [
    {
        img: aboutProfile,
        title: "9 Most Awesome Blue Lake With Snow Mountain",
        edit: <FontAwesomeIcon icon={faEdit} />,
        category: "Travel",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    },
    {
        img: aboutProfile,
        title: "9 Most Awesome Blue Lake With Snow Mountain",
        edit: <FontAwesomeIcon icon={faEdit} />,
        category: "Travel",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    },
    {
        img: aboutProfile,
        title: "9 Most Awesome Blue Lake With Snow Mountain",
        edit: <FontAwesomeIcon icon={faEdit} />,
        category: "Travel",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    },
    {
        img: aboutProfile,
        title: "9 Most Awesome Blue Lake With Snow Mountain",
        edit: <FontAwesomeIcon icon={faEdit} />,
        category: "Travel",
        delete: <FontAwesomeIcon icon={faTrashAlt} />,
    },
]

const BlogList = () => {

    return (
        <div className="md:ml-64 bg-gray-200">
            <div className="px-2 py-2 md:px-10 md:py-10 ">
                <div className="py-2 hidden md:grid grid-cols-12 justify-around items-center rounded-lg bg-black text-white">
                    <p className="col-start-2 col-end-3">Image</p>
                    <p className="col-start-4 col-end-6">Blog Title</p>
                    <p className="text-center col-start-9 col-end-11">Category</p>
                    <p className="text-center col-start-11 col-end-13">Edit and Delete</p>
                </div>
                {
                    blogList.map((item) => (
                        <div className="px-2 py-2 mt-4 flex-col flex md:flex-row justify-around items-center rounded-lg bg-gray-100">
                            <img className="mt-2 md:mt-2 h-20 py-2" src={item.img} alt="" />
                            <p className="mt-2 md:mt-2 text-center md:text-left">{item.title}</p>
                            <p className="mt-2 md:mt-2">{item.category}</p>
                            <div className="mt-2 mb-2 md:mt-2 md:mb-0 flex">
                                <a href="/admin/post-blog" className="cursor-pointer text-blue-300">{item.edit}</a>
                                <p className="cursor-pointer ml-5 text-red-600">{item.delete}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogList;