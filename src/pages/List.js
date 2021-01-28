import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getList } from "../api";
import PagePagination from '../components/PagePagination'
import Body from "../components/Body";
import Menu from "../components/Menu";

const List = () => {
  let { entity, page } = useParams();
  
  const [items, setItems] = useState({});
  
  useEffect( async() => {
    console.log(entity, page);
    setItems({});
    setItems(await getList(entity, page));
  }, [entity, page]);
  
  console.log(items);
  return (
    <div>
      {entity}
      <Menu />
      <Body className='body' entity={entity} list={items.pages} />
      <PagePagination list={items.meta}/>
    </div>
  )
}

export default List;