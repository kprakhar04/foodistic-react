// lodash
import _last from "lodash/last";
import _trim from "lodash/trim";
import _lowerCase from "lodash/lowerCase";
import _replace from "lodash/replace";
import _reduce from "lodash/reduce";

//helpers
import { compose } from "../../../utility/helpers";

// constants
const ROOT_URL = "/city";

const INITIAL_CRUMB = {
  text: "Home",
  path: "/",
  isUrl: true,
};

const isLastItem = (items, item) => {
  return _last(items) === item;
};

const replace = (text) => _replace(text, /\s+/g, "");

const generateUrl = compose(replace, _lowerCase, _trim);

const getLastItemPath = (list, index) => {
  return index > 0 ? list[index - 1].path : ROOT_URL;
};

const createCrumb = (crumbList, crumbItem, index, items) => {
  const url = generateUrl(crumbItem);

  const lastItemPath = getLastItemPath(crumbList, index);

  const crumb = {
    text: crumbItem,
    path: `${lastItemPath}/${url}`,
    isUrl: !isLastItem(items, crumbItem),
  };

  crumbList.push(crumb);

  return crumbList;
};

const breadCrumbConfig = (...items) => {
  const crumbs = _reduce(items, createCrumb, [INITIAL_CRUMB]);

  return crumbs;
};

export default breadCrumbConfig;
