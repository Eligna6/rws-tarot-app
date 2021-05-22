import React from "react";
import "../assets/styles/components/Loader.scss";
import portal from "../assets/static/images/portal.gif";

const Loader = () => (
  <div className="loader">
    <img className="loader-img" src={portal} alt="Portal loader" />
  </div>
);

export default Loader;
