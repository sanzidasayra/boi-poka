import React from 'react';
import bookimage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16  bg-gray-500 rounded-3xl'>
            <div>
                <h1 className='text-4xl pb-12'>Books to freshen up <br /> your bookshelf</h1>
                <button className='bg-[#23BE0A] py-5 px-7 rounded-xl'>View The List</button>
            </div>
            <div>
                <img  src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;