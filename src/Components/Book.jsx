import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Book = ({item}) => {
    const {bookName, author, image, rating, category, tags, bookId } = item;

    console.log(tags);
    return (
        <div className=" bg-white ">
            <Link to={`/books-details/${bookId}`}>
            <div className="card flex flex-col  shadow-xl">
  <figure className="px-10 pt-10 ">
    <img className=' rounded-2xl  w-[280px] h-52' src={image} />
  </figure>

  
  <div className="card-body h-60 bg-white ">
  <div className='font-work-sans flex items-center text-[#23BE0A] font-medium '>
   
  {
    tags.map((tag, index) => <p key={index} className="flex justify-between  px-2 text-center rounded-[36px] items-center" tag={tag}>{tag}</p>)
  }
  </div>
    <h2 className="font-playfair  font-bold text-[#131313] text-2xl">{bookName}</h2>
    <p className='font-work-sans text-[#131313cc]'>By: {author}</p>
    <div className=" flex-grow">
      <div className="flex justify-between items-center">
      <p className='font-work-sans  text-[#131313cc]'>{category}</p>
        <p className='font-work-sans flex items-center lg:ml-36 gap-2 text-[#131313cc]'>{rating}  <CiStar /></p>
      </div>
       
    </div>
  </div>
</div>
            </Link>
           
        </div>
    );
};

Book.propTypes = {
  item: PropTypes.object
}
export default Book;