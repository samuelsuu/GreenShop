import React from 'react';
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './nav.css'
import Livestock from "./livestock";
import Crop from './crop';
import Fetilizers from './fertilizers';
import AgroMed from './Agro-Med';
import Others from './others';
import { Link } from '@chakra-ui/react';


function nav() {
    return ( 
        <div className='nav'>
            <div className='nav1'>
                <ul>
                    <li><Livestock /></li>
                    <li><Crop /></li>
                    <li><Fetilizers /></li>
                    <li><AgroMed /></li>
                    <li><Others /></li>
                </ul>
            </div>

            <div className='nav2'>
                <Link to="/">Help</Link>    
                <i><CiUser/></i>
                <i><AiOutlineShoppingCart/></i>
            </div>
        </div>
     );
}

export default nav;