import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from 'react-router-dom';
import { getList, searchItem } from "../api";
import PagePagination from '../components/PagePagination'
import Body from "../components/Body";
import Menu from "../components/Menu";
import { useGetParams } from "../hooks/useGetParams";
import Search from '../components/Search';
import { Button } from "react-bootstrap";

const List = () => {
  let { entity } = useParams();
  const { page } = useGetParams();
  const top = useRef();
  
  const [items, setItems] = useState({});
  
  useEffect( () => {
    async function fetchData() {
      setItems({});
      setItems(await getList(entity, page));
    }
    fetchData();
  }, [entity, page,]);
  
  const searchInput = useCallback (async (search) => {
    const searchedItems = await searchItem(entity, search);
    setItems({
      pages: searchedItems.results
    })
  }, [entity])
  const clickHandler = useCallback (() => {
    window.scrollTo(0, top.current.clientTop)
    console.log(top.current.clientTop)
  }, []);

  return (
    <div ref={top}>
      {entity}
      <Menu />
      <Search entity={entity} onSearch={searchInput} />
      <Body className='body' entity={entity} list={items.pages} />
      <PagePagination count={items.quantity} />
      <Button
        onClick={clickHandler}
      >up</Button>
    </div>
  )
}

export default List;