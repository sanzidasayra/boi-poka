import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaHashtag } from "react-icons/fa";
import { AddToStoreDB } from '../../../Utilities/AddToDB';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image, author, review, category, tags, totalPages
    , publisher, yearOfPublishing, rating   } = singleBook;


    const handleMarkAsRead = id => {
        // store with id
        // where to store
        // array or collection
        // if book already exist the show a alert
        // id book not exist then add to the array


        AddToStoreDB(id);
    }


    return (
        <div className=''>
            <div>
            <img className='w-[425px] h-[564px] p-16 bg-gray-400 rounded-2xl' src={image} alt="" />
            </div>

            <div>
            <h2 className='font-bold text-4xl'>{bookName}</h2>
            <p className='font-medium text-xl pt-4 pb-4'>{author}</p>
            <hr className='border border-dashed opacity-20'/>
            <p className='font-medium text-xl pt-4 pb-4'>{category}</p>
            <hr className='border border-dashed opacity-20' />
            <p className=' pt-4 pb-4 '><span className='font-medium text-xl'>Review:</span> <span className='text-gray-300'>{review}</span></p>

            <div className='flex gap-4 pb-4 mt-6'>
                <h1 className='flex items-center font-bold '>Tag</h1>
             {
            tags.map(tag => <button className="btn btn-soft btn-success "><FaHashtag />{tag}</button>)
             }
            </div>
            <hr className='border border-dashed opacity-20 mt-6' />

            <div>
            <p className='pb-3 pt-6'>Number of Pages: <span className='font-semibold ml-[66px]'> {totalPages}</span></p>
             <p className='pb-3'>Publisher: <span className='font-semibold  ml-[125px]'>{publisher}</span></p>
             <p className='pb-3'>Year of Publishing: <span className='font-semibold ml-[63px]'>{yearOfPublishing}</span></p>
             <p className='pb-8'>Rating: <span className='font-semibold ml-[145px]'>{rating}</span></p>
            </div>

             <div className='flex gap-4'>
                <button onClick={() => handleMarkAsRead (id)} className='bg-white text-black px-7 py-4 rounded-xl'>Mark as Read</button>
                <button className='bg-[#50B1C9] px-7 py-4 rounded-xl'>Add to Wishlist</button>
             </div>

            </div>
            
        </div>
    );
};

export default BookDetails;