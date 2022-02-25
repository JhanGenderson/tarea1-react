import React from "react";
import ServicesInfo from "../services-component/services-info.component";

import cashierBoy from "../../assets/cashier.svg";
import cashierGirl from "../../assets/cashier-1.svg";
import delivery from "../../assets/delivery.svg";
import foodTray from "../../assets/food-tray.svg";
import telephone from "../../assets/telephone.svg";
import cutlery from "../../assets/cutlery.svg";

import "./album-services.styles.css"
class AlbumServices extends React.Component {
  constructor() {
    super();

    this.state = {
      services: [
        {
          id: 1,
          imageSrc: `${cashierBoy}`,
          title: "Services",
          description:
            "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services.",
        },
        {
          id: 2,
          imageSrc: `${cashierGirl}`,
          title: "Services",
          description:
            "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services.",
        },
        {
          id: 3,
          imageSrc: `${delivery}`,
          title: "Services",
          description:
            "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services.",
        },
        {
          id: 4,
          imageSrc: `${foodTray}`,
          title: "Services",
          description:
            "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services.",
        },
        {
          id: 5,
          imageSrc: `${telephone}`,
          title: "Services",
          description:
            "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services.",
        },
        {
          
          imageSrc: `${cutlery}`,
          title: "Services",
          id: 6,
          description:
            "We provide best and fresh quality foods. We also gives you required signature dishes ad more nice and cool services.",
        },
      ],
    };
  }
  render() {
    return (
      <div className="seccion-services">
        {this.state.services.map(({ id, ...otherServiceProps }) => (
          <ServicesInfo key={id} {...otherServiceProps} />
        ))}
      </div>
    );
  }
}

export default AlbumServices;
