import React from "react";
import VerticalNavbar from "./Sidebar";
import ProviderForm from "../pages/ZipCodeDataDisplay";
function Zipcodes() {
  return (
    <div className="Zipcodes">
      <VerticalNavbar />
      <ProviderForm />
    </div>
  );
}
export default Zipcodes;
