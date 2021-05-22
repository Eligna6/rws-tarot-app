import React from "react";
import "../assets/styles/components/Error.scss";
import errorImage from "../assets/static/images/error.png";

const Error = () => (
  <div className="error">
    <img className="error-img" src={errorImage} alt="Error image" />
    <span className="error-text">Oops, an error has ocurred.</span>
  </div>
);

export default Error;
