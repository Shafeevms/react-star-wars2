import React from 'react';
import { getItem } from '../api';
 
const CardPerson = ({item}) => {
    

    return (
        <><h1>{item.name}</h1></>
    )
}

export default CardPerson;