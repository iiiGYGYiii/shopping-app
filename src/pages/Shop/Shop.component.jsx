import React, { Component } from "react";

import "./Shop.styles.scss";

import { SHOP_DATA } from "./Shop.data.js";

class ShopPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render(){
    return(<div>
      xd
    </div>);
  }
}

export default ShopPage;
