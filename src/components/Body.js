import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Body = ({ list, entity }) => {
  const sorted = useMemo(() => {
    return list && list.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
  },[list])
  console.log(sorted)
  return (
    <ul className="list">
      {list && list.length
      ? sorted.map((listItem, index) => {
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
