import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getList } from "../api";
import PagePagination from '../components/PagePagination'
import Body from "../components/Body";
import Menu from "../components/Menu";
import { useGetParams } from "../hooks/useGetParams";
import Search from '../components/Search';

const List = () => {
  let { entity } = useParams();
  const { page } = useGetParams();
  
  const [items, setItems] = useState({});
  
  useEffect( async() => {
    setItems({});
    setItems(await getList(entity, page));
  }, [entity, page,]);
  
  const getData = (data) => {
    console.log(data);
  }

  return (
    <div>
      {entity}
      <Menu />
      <Search getData={getData} />
      <Body className='body' entity={entity} list={items.pages} />
      <PagePagination count={items.quantity} />
    </div>
  )
}

export default List;