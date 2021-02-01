import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Body = ({ list, entity }) => {

  // console.log('Body: ', list, entity);
  return (
    <ul className="list">
      {list && list.length
      ? list.map((listItem, index) => {
        const path = parseInt(listItem.url.replace(/[^\d]/g, ''));
        return <Link
        className="item"
        to={`${entity}/${path}`}
        key={index}
        >
          {listItem.name}
        </Link>}) 
        : <Loader /> }
    </ul>
  )
}

export default Body;
