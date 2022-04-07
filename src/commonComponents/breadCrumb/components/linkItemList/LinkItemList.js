// prop-types
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _uniqueId from "lodash/uniqueId";
import _startCase from "lodash/startCase";

// components
import LinkItem from "../../../linkItem";

// css
import "./linkItemList.css";

const renderLinkItem = (item) => {
  const { text, isUrl, path } = item;
  return (
    <LinkItem
      key={_uniqueId(text)}
      href={path}
      isUrl={isUrl}
      label={_startCase(text)}
      className="bread-crumb-link"
    />
  );
};

const LinkItemList = (props) => {
  const { items } = props;

  return _map(items, renderLinkItem);
};

LinkItemList.defaultProps = {
  items: [
    {
      text: "#Link",
      path: "#",
      isUrl: true,
    },
  ],
};

LinkItemList.propTypes = {
  items: PropTypes.array,
};

export default LinkItemList;
