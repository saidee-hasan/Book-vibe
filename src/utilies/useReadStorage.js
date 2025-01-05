import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const getRead = ()=>{
    let reads = [];
    const storeReads = localStorage.getItem("read");
    if(storeReads){
        reads = JSON.parse(storeReads);
    }
    return reads;
}

export const saveReads = data=>{
    let reads = getRead();
    const isExist = reads.find(read=> read.bookId === data.bookId);
    if(isExist){
     
        return toast.error("You have already read this book")
    }
    
        reads.push(data)
        localStorage.setItem("read", JSON.stringify(reads));
        return toast.success("Book added for Read");
    
}