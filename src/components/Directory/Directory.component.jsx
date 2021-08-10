import React, { Component } from "react";

import "./Directory.styles.scss";

import { MenuItem } from "../components.js";
import { sections } from "./Directory.data.js";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem
            key={ id }
            { ...otherSectionProps }
          />
        ))}
      </div>
    );
  }
}

export default Directory;
