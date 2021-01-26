import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getList } from "../api";
import Body from "../components/Body";
import Menu from "../components/Menu";

const List = () => {
  let { entity } = useParams();
  
  const [items, setItems] = useState([]);
  
  useEffect( async() => {
    setItems([]);
    setItems(await getList(entity));
}, [entity])
console.log(items)

  return (
    <div>
      {entity}
      <Menu />
      <Body list={items}/>
    </div>
  )
}

export default List;