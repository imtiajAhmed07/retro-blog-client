import React, { useState } from 'react';
import './Blog.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaCloudUploadAlt } from 'react-icons/fa';
import { faCloud, faTimes, } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    
    const [blogPost, setBlogPost] = useState({});

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data =>{
        
    }

    return (
        <div className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <p>Post A Blog</p>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text"
                            placeholder="Blog Title" {...register("example")}
                        /> <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text" placeholder="Post Owner" {...register("exampleRequired", { required: true })}
                        /> <br />
                        <textarea
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text" placeholder="Blog Description" {...register("exampleRequired", { required: true })}
                        /> <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text" placeholder="Category" {...register("exampleRequired", { required: true })}
                        /> <br /> <br />
                        <div className="flex flex-wrap items-center w-10/12 md:w-4/6">
                            <label
                                className="fileUpload rounded-lg bg-black text-white px-3 py-2" for="file">
                                <span><FontAwesomeIcon icon={faCloud} /></span>
                                <span className="ml-2">Upload Image</span>
                            </label>
                            <p className="mt-3 md:mt-0 md:ml-3 text-sm font-medium">( h:290px <FontAwesomeIcon icon={faTimes} /> w:770px )</p>
                        </div>
                        <input
                            className="w-10/12 md:w-4/6 mt-3 ml-2" type="file" id="file" accept="image/*" {...register("exampleRequired", { required: true })} /> <br />
                        <input
                            id="adminFile"
                            className="w-4/6 bg-black rounded-lg py-2 text-white text-lg font-bold" type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blog;