import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Divider } from '@mui/material';


function NewsBoard() {

    const [dataNews, setDataNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/posts')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setDataNews(response.data)
            })

    }, [])


    return (
        <>
            <div class='flex w-full m-auto justify-center'>
                <div class=" w-1/5  bg-slate-100 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 mt-4 ">
                    <div class="max-w-sm bg-sky-200 h-8 ">
                        <h1 class='pt-2 font-bold text-red-500'>NEWS BOARD</h1>
                    </div>

                    {dataNews.map((items) => (
                        <div>
                            {/* <h1>{items.id}</h1> */}
                            <h1>{items.category}</h1>
                            {/* <h1>{items.api_url}</h1>
                            <h1>{items.pre_conditions}</h1>
                            <h1>{items.expected_payload}</h1>
                            <h1>{items.response_format}</h1> */}
                            <Divider />
                        </div>
                    ))}
                    <div class="p-5">
                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-sky-200  hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="  w-2/5  bg-slate-100 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96  mt-4 ml-12">
                    <h1 class="text-3xl">Hello </h1>
                </div>

                <div class="  w-1/5 justify-right smax-w-sm bg-slate-100  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96  mt-4 ml-12">
                    <div class="max-w-sm bg-sky-200 h-8 ">
                        <h1 class='pt-2 font-bold text-red-500'>LATEST UPDATES</h1>
                    </div>
                    <div class="p-5">
                        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-sky-200  hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default NewsBoard