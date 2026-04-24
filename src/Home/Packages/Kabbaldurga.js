import React from "react";
import PackageTemplate from "./Packagetemplets";
import image from "../../Images/coorg.jpeg";

function Kabbaldurga() {
  return (
    <PackageTemplate
      title="Wayanad Trip"
      image={image}
      duration="2 Days 1 Night"
      status="Filling Fast"
      transportPrice="₹999"
      withoutTransport="₹599"
      bookingAmount="₹400"
    />
  );
}

export default Kabbaldurga;