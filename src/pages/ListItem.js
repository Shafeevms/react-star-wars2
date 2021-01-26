import React from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

const ListItem = () => {

  let { entity, id} = useParams();
  
  return (
    <div>
      {`${entity}:${id}`}
      <Menu />
    </div>
  )
}

export default ListItem;