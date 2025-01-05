import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="font-playfair py-16">
          <div className="hero min-h-screen bg-[#1313130d] rounded-3xl">
  <div className="hero-content flex-col gap-24  lg:flex-row-reverse">
    <img src="https://i.ibb.co/HVGGF9k/book1.png" className="  rounded-lg shadow-2xl w-[318px] h-[349px] bg-[#1313130d] " />
    <div className="lg:w-3/5">
      <h1 className="text-[30px] lg:text-[56px] text-[#131313] font-bold">Books to freshen up <br />
       your bookshelf</h1>
    
      <Link to="/listed-books"><button className="btn mt-4 block bg-[#23BE0A] text-white mr-4">View The List</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;