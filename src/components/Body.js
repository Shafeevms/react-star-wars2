import React from "react";

const Body = ({ list }) => {
  return (
    <ul>
      {list.length ? list.map((listItem, index) => <li
        key={index}
        >{listItem.name}
        </li>) : null }
    </ul>
  )
}

export default Body;