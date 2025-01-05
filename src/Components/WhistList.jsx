
import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import pages from "../assets/icons/Frame.png"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const WhistList = ({item}) => {
    const {bookName, author, image, rating, category, tags, bookId, totalPages, yearOfPublishing } = item;
    return (
        <div className="flex flex-col lg:flex-row justify-between border h- gap-6 rounded-2xl">
            <div className="lg:w-[30%] p-6 mx-auto" >
                <figure className="py-[50px] px-[70px] rounded-2xl bg-[#F3F3F3]">
                <img className="w-[200px] h-[220px]" src={image} alt="" />
                </figure>
                
            </div>
            <div className="lg:w-[65%] pl-6 lg:py-8 lg:pr-8">
            <h2 className="font-playfair mb-4 font-bold text-[#131313] text-2xl">{bookName}</h2>
    <p className='font-work-sans mb-6 text-[#131313cc] font-medium'>By: {author}</p>

    <div className="flex flex-col lg:flex-row gap-4 font-work-sans mb-6">
            <p className="text-[#131313] font-bold">Tag  {
                tags.map((tag, index)=>  <span key={index} tag={tag} className="mr-4 justify-between text-[#23BE0A] font-medium">#{tag}</span>)
            }
            </p>
            
            <p className="flex lg:items-center"><CiLocationOn></CiLocationOn> <span>Year of Publishing: {yearOfPublishing}</span></p>
            </div>
            <div className="flex items-center gap-6">
                <p className="flex items-center gap-2"><BsPeople></BsPeople> <span>Publisher: Scribner</span></p>
                <p className="flex items-center gap-2">
                   <img src={pages} alt="" /> 
                   <span> Page: {totalPages}</span>
                </p>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-3 font-work-sans">
                <button className="btn rounded-[36px] bg-[#328eff26] text-[#328EFF]">Category: {category}</button>

                <button className="btn rounded-[36px] bg-[#ffac3326] text-[#FFAC33]">Rating: {rating}</button>

                <Link  to={`/books-details/${bookId}`}><button className="btn rounded-[36px] bg-[#23BE0A] text-white mr-4">View Details</button></Link>
            </div>
            </div>
        </div>
    );
};

WhistList.propTypes = {
    item: PropTypes.object
}

export default WhistList;