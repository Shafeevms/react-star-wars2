import React from "react";
import { Link } from "react-router-dom";

const Body = ({ list, entity }) => {
  return (
    <ul className="list">
      {list.length ? list.map((listItem, index) => <Link
        className="item"
        to={`${entity}/${index + 1}`}
        key={index}
        >{listItem.name}
        </Link>) : null }
    </ul>
  )
}

export default Body;