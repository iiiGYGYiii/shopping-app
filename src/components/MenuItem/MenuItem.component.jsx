import React from "react";
import { Link } from "wouter";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) =>{
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };
  return(<Link to={linkUrl}>
    <div className={`menu-item ${size}`}>
      <div
        style={style}
        className="background-image"
      />
      <div  className="content">
        <h1 className="title" >{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  </Link>);
};

export default MenuItem;
