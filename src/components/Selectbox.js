import React from 'react'

function Selectbox() {
    return (
        <>
            <div class="flex">
                <select 
                    class=" flex-1 mb-7 p-1 form-select block w-2/3px-3 py-1.5 mt-5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option selected>SELECT YOUR ULB</option>
                    <option value="1">Adityapur Municipal Corporation</option>
                    <option value="2">Barharwa Nagar Panchayat</option>
                    <option value="3">Basukinath Nagar Panchayat</option>
                </select>
                
                
            </div>
        </>
    )
}

export default Selectbox