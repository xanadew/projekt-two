import React from 'react';
import {Link} from 'react-router-dom';

export default function Shelfie(props){
    return(
        <Link to={`/bins/${props.id}`}>
            <div className='bins'>
            SHELFIE
            </div>
        </Link>
    )
}