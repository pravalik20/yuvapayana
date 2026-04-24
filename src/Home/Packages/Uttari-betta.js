import React from "react";
import PackageTemplate from "./Packagetemplets";
import image from "../../Images/coorg.jpeg";

function Wayanad() {
  return (
    <PackageTemplate
      title="Uttari Betta"
      image={image}
      duration="1 Days"
      status="Filling Fast"
      transportPrice="₹999"
      withoutTransport="₹599"
      bookingAmount="₹300"
    />
  );
}

export default Wayanad;