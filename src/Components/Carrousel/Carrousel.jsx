import React from "react";
import Carousel from "react-material-ui-carousel";

export function Example(props) {
  var items = [...props.array];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} char={props.card} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div
      style={{
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.char.id}_${props.item}.jpg)`,
      }}
      className="champPage"
    >
      <h1>{props.char.id}</h1>
      <h2>{props.char.title}</h2>
      <p>{props.char.lore}</p>
    </div>
  );
}
