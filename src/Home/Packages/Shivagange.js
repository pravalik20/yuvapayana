import React from "react";
import PackageTemplate from "./Packagetemplets";
import image from "../../Images/coorg.jpeg";

function Shivagange() {
  return (
    <PackageTemplate
      title="Shivgange "
      image={image}
      duration="1 Day"
      status="Filling Fast"
      transportPrice="₹999"
      withoutTransport="₹599"
      bookingAmount="₹400"
    />
  );
}

export default Shivagange;