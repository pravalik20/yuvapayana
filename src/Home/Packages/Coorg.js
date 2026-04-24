import React from "react";
import PackageTemplate from "./Packagetemplets";
import image from "../../Images/coorg.jpeg";

function Coorg() {
  return (
    <PackageTemplate
      title="Coorg Trip"
      image={image}
      duration="2 Days 1 Night"
      status="Filling Fast"
      transportPrice="₹4999"
      withoutTransport="₹2999"
      bookingAmount="₹2500"
    />
  );
}

export default Coorg;