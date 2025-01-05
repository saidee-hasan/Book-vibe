import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const getWishes = ()=>{
    let wishes = [];
    const storeReads = localStorage.getItem("wishlist");
    if(storeReads){
        wishes = JSON.parse(storeReads);
    }
    return wishes;
}

export const saveWishes = data=>{
    let wishes = getWishes();
    const isExist = wishes.find(wish=> wish.bookId === data.bookId);
    if(isExist){
     
        return toast.error("Book Already Added to the wish list")
    }
    
    wishes.push(data)
        localStorage.setItem("wishlist", JSON.stringify(wishes));
        return toast.success("Book added at the Wish List");
    
}