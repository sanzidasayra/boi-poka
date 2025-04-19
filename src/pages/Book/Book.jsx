import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
    // const data = use(bookPromise);
    // console.log(data);
    const {bookName, author, image, rating, category, tags, yearOfPublishing
    } = singleBook;

    return (
        <div className="card bg-base-100 w-96 shadow-2xl border p-6">
  <figure className='px-24 py-8 bg-gray-400 rounded-xl'>
    <img className='w-[134px] h-[166px]'
      src={image} />
  </figure>
  
  <div className="pt-4 pb-10">

       <div className='flex gap-4 pb-4'>
       {
            tags.map(tag => <button className="btn btn-soft btn-success ">{tag}</button>)
        }

       </div>
    <h2 className="card-title">{bookName}  <div className="badge badge-secondary">{yearOfPublishing}</div></h2> 
    <p className='pt-4 pb-4'>{author}</p>
    <div className='border border-dashed bg-green-500 opacity-20'></div>
  </div>
  <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
    </div>
</div>
    );
};

export default Book;