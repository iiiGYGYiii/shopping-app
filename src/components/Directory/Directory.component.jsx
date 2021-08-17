import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/reducers/directory/directory.selectors";

import "./Directory.styles.scss";

import { MenuItem } from "../components.js";

const Directory = () => {
  const { sections } = useSelector(
    createStructuredSelector({ sections: selectDirectorySections })
  );
  console.log(sections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
