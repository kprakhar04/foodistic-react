// components
import SearchInput from "../../../../../../commonComponents/searchInput";
import Checkbox from "../../../../../../commonComponents/checkbox";
import IconWithLabel from "../../../../../../commonComponents/iconWithLabel";

// icons
import search from "../../../../../../assets/icons/search.svg";
import favoriteIcon from "../../../../../../assets/icons/favorite.svg";

// css
import "./menuFilter.css";

const MenuFilter = function () {
  return (
    <div className="menu-filter flex justify-space-between align-items-center">
      <SearchInput
        className="menu-filter-input"
        placeholder="Search for dishes..."
        icon={search}
      />
      <Checkbox
        className="menu-filter-input"
        label="Veg Only"
        htmlFor="isVeg"
      />
      <IconWithLabel
        className="menu-filter-input favorite"
        icon={favoriteIcon}
      />
    </div>
  );
};
export default MenuFilter;
