import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="border-b-4 border-pink-700 text-center fixed top-0 w-full bg-pink-600 
    font-bold text-lg text-white">

        <ul>
            <li className="inline-block pt-4 pb-4 ">
                <Link to="/" className='pl-6 pr-8 border-1 shadow-md hover:bg-red-600 active:bg-blue-400'>
                    Home
                </Link>
            </li>
            <li className="inline-block pt-4 pb-4 border-1  ">
                <Link to="/about" className='pl-6 pr-8 shadow-md hover:bg-red-600 active:bg-blue-400'>
                    About
                </Link>
            </li>
            <li className="inline-block pt-4 pb-4 border-1 ">
                <Link to="/articles-List" className='pl-6 pr-8 shadow-md hover:bg-red-600 active:bg-blue-400'>
                    ArticlesList
                </Link>
            </li>
        </ul>
     
    </div>
  );
};

export default NavBar;