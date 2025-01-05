
import useBooks from "../Hooks/useBooks";
import Book from "./Book";

const Books = () => {

    const {data} = useBooks();
    
    return (
        <div>
            <h1 className="font-playfair text-[30px] lg:text-[40px] font-bold text-center">Books</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {
                        data.map(item=> <Book key={item.id} item={item}></Book>)
                    }
            </div>

            

            
        </div>
    );
};

export default Books;