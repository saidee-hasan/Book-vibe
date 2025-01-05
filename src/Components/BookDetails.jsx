import { Link, useParams } from "react-router-dom";
import useBooks from "../Hooks/useBooks";
import { useEffect, useState } from "react";
import { saveReads } from "../utilies/useReadStorage";
import { saveWishes } from "../utilies/useWishtListStorage";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
   const {bookId} = useParams()
   const {data} = useBooks()
   const [singleBook, setSingleBook] = useState([]);
   const [readBtn, setReadBtn] = useState(false)
   let singleBooks = data.find(item => item.bookId === parseInt(bookId));
   useEffect(()=>{
  
    setSingleBook(singleBooks);

   }, [singleBooks])

   const {bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing} = singleBook || {};


const handleRead = data=>{
    saveReads(data);
    setReadBtn(true)
}
const handleWish = (data) =>{
    if(!readBtn){
      saveWishes(data)
    }else{
       return toast.error("You have already read this book")
    }
    
}
    return (
        <div className="hero max-w-7xl mx-auto mt-6">
        <div className="hero-content flex-col lg:flex-row">
            <div className="flex-1">
            <img className="w-[425px] bg-[#F3F3F3]" src={image} />
            </div>
         
          <div className="flex-1">
            <h1 className="font-playfair font-bold mb-4 text-[#131313] text-4xl">{bookName}</h1>
            <p className="font-work-sans font-semibold text-[#131313cc]">By: {author}</p>

            <div className="divider"></div>

            <p className='font-work-sans mb-4 text-[#131313cc]'>{category}</p>

            <p className="font-work-sans text-[#131313b3]"><span className="text-[#131313] font-bold">Review: </span>{review}</p>
            <div className="flex gap-4 font-work-sans mt-2">
            <p className="text-[#131313] font-bold ">Tag</p>
            {/* <p className="flex gap-4 justify-between text-[#23BE0A] font-medium">#{tags}</p> */}
            {
    tags?.map((item, index) => <p key={index} className="flex justify-between bg-[#23be0a0d] px-2 rounded-[36px]  text-[#23BE0A]  items-center" item={item}>#{item}</p>)
  }
            </div>
            
            <div className="divider"></div>

            <div>
                <div className="flex gap-[65px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Number of Pages: </p>
                    <p className="text-[#131313] font-semibold">{totalPages}</p>
                </div>
                <div className="flex gap-[125px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Publisher: </p>
                    <p className="text-[#131313] font-semibold"> {publisher}</p>
                </div>
                <div className="flex gap-[64px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Year of Publishing:  </p>
                    <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
                </div>
                <div className="flex gap-[152px] my-3">
                    <p className="font-work-sans text-[#131313b3]">Rating:  </p>
                    <p className="text-[#131313] font-semibold">{rating}</p>
                </div>

                <div className="font-work-sans mt-4" >
                    <Link>
                    <Link><button onClick={()=>handleRead(singleBooks)} className="btn mr-4 text-[18px] font-semibold border-[#1313134d]">Read</button></Link>
                        <Link><button onClick={()=> handleWish(singleBooks )} className="btn text-[18px] bg-[#59C6D2] font-semibold text-white">Wishlist</button></Link>
                    </Link>
                </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default BookDetails;