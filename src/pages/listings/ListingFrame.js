import React from 'react';
import { Link } from "react-router-dom";

export default function ListingFrame({ item }){
    return (
        <Link to={`/listing/${item._id}`}>
            <li className='p-5 w-52 bg-white rounded-lg shadow-sm' key={item.id}>
                <img className='w-full aspect-square object-cover'src={item.images[0]}></img>
                <h1 className='font-bold'>{item.title}</h1>
                <h2>$ {item.price}</h2>
            </li>
        </Link>
    );
}

