import React, { useState } from 'react';
import './Blog.css'
// import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faTimes, } from '@fortawesome/free-solid-svg-icons';

const Blog = () =>{

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }

    // post all data together......
    const handleSubmit = e =>{

        const formData = new FormData()
        formData.append('file', file)
        formData.append('blogTitle', info.blogTitle)
        formData.append('postOwner', info.postOwner)
        formData.append('blogDescription', info.blogDescription)
        formData.append('category', info.category)


        fetch('https://fast-cove-64403.herokuapp.com/post-blog', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data =>
            {
                console.log(data)
            })
            .catch(error =>
            {
                console.error(error)
            })

        alert("Blog posted successfully");
        e.target.reset();
    }

    // get the image..
    const handleFile = (e) =>{
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    return (
        <div className="md:ml-64">
            <div className="md:py-20 md:bg-gray-200 flex items-center justify-center">
                <div className="mt-10 md:mt-0 rounded-xl py-10 md:w-3/5 bg-gray-100 flex flex-col items-center justify-evenly">
                    <p>Post A Blog</p>
                    <form className="w-full flex items-center flex-col mt-5 md:mt-10" onSubmit={handleSubmit} >
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text"
                            name="blogTitle"
                            placeholder="Blog Title"
                            onChange={handleBlur}
                        /> <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text"
                            name="postOwner"
                            placeholder="Post Owner"
                            onChange={handleBlur}
                        /> <br />
                        <textarea
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text"
                            name="blogDescription"
                            placeholder="Blog Description"
                            onChange={handleBlur}
                        /> <br />
                        <input
                            className="w-10/12 md:w-4/6 py-1 px-1 outline-none bg-transparent placeholder-black border-b-2 border-black" type="text"
                            name="category"
                            placeholder="Category"
                            onChange={handleBlur}
                        /> <br /> <br />
                        <div className="flex flex-wrap items-center w-10/12 md:w-4/6">
                            <label
                                className="cursor-pointer fileUpload rounded-lg bg-black text-white px-3 py-2" for="file">
                                <span><FontAwesomeIcon icon={faCloud} /></span>
                                <span className="ml-2">Upload Image</span>
                            </label>
                            <p className="mt-3 md:mt-0 md:ml-3 text-sm font-medium">( h:290px <FontAwesomeIcon icon={faTimes} /> w:770px )</p>
                        </div>
                        <input
                            className="w-10/12 md:w-4/6 mt-3 ml-2"
                            type="file" id="file" accept="image/*"
                            name="image"
                           onChange={handleFile}
                        /> <br />
                        <input
                            id="adminFile"
                            className="cursor-pointer w-4/6 bg-black rounded-lg py-2 text-white text-lg font-bold"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blog;