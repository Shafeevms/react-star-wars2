import React, { useEffect, useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { getItem } from "../api";
import CardPerson from "../components/CardPerson";
import CardPlanet from "../components/CardPlanet";
import CardStarship from "../components/CardStarship";
import Menu from "../components/Menu";

const ListItem = () => {
  let { entity, id} = useParams();
  console.log(entity);
  const [item, setItem] = useState();
  useEffect( async () => {
    setItem([]);
    setItem(await getItem(entity, id));
  }, [id]);

  return (
    <div>
      {`${entity}:${id}`}
      <Menu />
      {entity === 'planet' && <CardPlanet item={item} />}
      {entity === 'people' && <CardPerson item={item} />}
      {entity === 'starships' && <CardStarship item={item} />}
    </div>
  )
}

export default ListItem;