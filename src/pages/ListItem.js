import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPerson from "../components/CardPerson";
import CardPlanet from "../components/CardPlanet";
import CardStarship from "../components/CardStarship";
import { getItem } from '../api';
import Menu from "../components/Menu";

const ListItem = () => {
  let { entity, id} = useParams();
  const [item, setItem] = useState('');
  
  useEffect( async () => {
    setItem('');
    setItem(await getItem(entity, id));
  }, [id]);

  return (
    <div>
      {`${entity}:${id}`}
      <Menu />
      {entity === 'planets' && <CardPlanet item={item} />}
      {entity === 'people' && <CardPerson item={item} />}
      {entity === 'starships' && <CardStarship item={item} />}
    </div>
  )
}

export default ListItem;