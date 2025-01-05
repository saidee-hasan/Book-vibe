import { useEffect, useState } from "react";


const useBooks = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetChData = async ()=> {
            const res = await fetch("/books.json")
            const data = await res.json()
            setData(data)
        }
        fetChData();
    },[])
    return {data}
        
    
};

export default useBooks;