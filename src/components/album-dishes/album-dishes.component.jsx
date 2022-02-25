import React from "react";
import MenuItems from "../menu-items/menu-item.component";

import Dish1 from "../../assets/Meatballs1.jpg";
import Dish2 from "../../assets/Meatballs2.jpg";
import Dish3 from "../../assets/Meatballs3.jpg";

import "./album-dishes.styles.css";

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      dishes: [
        {
          title: "Spicey Meatballs 1",
          imageSrc: `${Dish1}`,
          id: 1,
          description:
            " Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
        },
        {
          title: "Spicey Meatballs 2",
          imageSrc: `${Dish2}`,
          id: 2,
          description:
            " Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
        },
        {
          title: "Spicey Meatballs 3",
          imageSrc: `${Dish3}`,
          id: 3,
          description:
            " Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
        },
        {
          title: "Spicey Meatballs 1",
          imageSrc: `${Dish1}`,
          id: 4,
          description:
            " Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
        },
        {
          title: "Spicey Meatballs 2",
          imageSrc: `${Dish2}`,
          id: 5,
          description:
            " Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
        },
        {
          title: "Spicey Meatballs 3",
          imageSrc: `${Dish3}`,
          id: 6,
          description:
            " Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque",
        },
      ],
    };
  }

  render() {
    return (
      <div className="seccion-platos">
        {this.state.dishes.map(({ id, ...otherDishProps }) => (
          <MenuItems key={id} {...otherDishProps} />
        ))}
      </div>
    );
  }
}

export default Album;
