import React from "react";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) =>{
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };
  return(<div className={`menu-item ${size}`}>
    <div
      style={style}
      className="background-image"
    />
    <div  className="content">
      <h1 className="title" >{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>);
};

export default MenuItem;
