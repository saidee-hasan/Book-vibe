
import Error from '../Pages/Error';
import ListedBooks from '../Pages/ListedBooks';
import Home from '../Pages/Home';
import Root from '../Root'
import {
  createBrowserRouter,
} from "react-router-dom";
import Read from '../Components/Read';
import WhistList from '../Components/WhistList';
import PagesToRead from '../Pages/PagesToRead';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact';
import Modal from '../Pages/Modal';
import BookDetails from '../Components/BookDetails';



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
  
        },
        {
          path: "/listed-books",
          element: <ListedBooks></ListedBooks>, 
          children: [
            {
              index: true,
              element: <Read></Read>
            },
            {
              path: "whist-list",
              element: <WhistList></WhistList>
            }
          ]
        },
        {
          path: "/pages-to-read",
          element: <PagesToRead></PagesToRead>
        },
        {
          path:"/about-us",
          element: <AboutUs></AboutUs>
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
          children:[
            {
              path: "modal",
              element: <Modal></Modal>
            }
          ]
        },
            
          
        {
          path: "/books-details/:bookId",
          element:<BookDetails></BookDetails>
        }
        
      ]
    },
  ]);