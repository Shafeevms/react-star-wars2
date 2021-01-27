import React from "react";
import { Link } from "react-router-dom";

const Body = ({ list, entity }) => {
  return (
    <ul className="list">
      {list.length 
      ? list.map((listItem, index) => {
        const path = parseInt(listItem.url.replace(/[^\d]/g, ''));
        return <Link
        className="item"
        to={`${entity}/${path}`}
        key={index}
        >
          {listItem.name}
        </Link>}) 
        : null }
    </ul>
  )
}

export default Body;
