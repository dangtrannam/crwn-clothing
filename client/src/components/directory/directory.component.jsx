import { useSelector } from "react-redux";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

function Directory() {
  const sections = useSelector(selectDirectorySections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
}

export default Directory;
