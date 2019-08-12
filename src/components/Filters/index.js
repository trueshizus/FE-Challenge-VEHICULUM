import React, { useState } from "react";
import PropTypes from "prop-types";
import Loading from "../Loading";

function Filters(props) {
  const { categories } = props;

  return categories.length === 0
    ? <Loading> Loading categories...</Loading>
    : <CategoryList {...props} />;
}

function CategoryList(props) {
  const { categories, loadingCategories, changeFilter, activeFilter } = props;
  const [showFullList, setShowFullList] = useState(false);

  const shortCategories = showFullList ? categories : categories.slice(0, 9);
  const showIfActive = category =>
    category === activeFilter ? "pill__active" : "";
  const mobileVisibility = showFullList ? "" : "hide-mobile";

  return (
    <div class="filters">
      {!loadingCategories &&
        <button
          class={`pill pill__action typography typography--pill typography--link show-mobile ${showFullList
            ? "arrow-up"
            : "arrow-down"}`}
          onClick={() => {
            setShowFullList(value => !value);
          }}
        >
          {showFullList ? "Hide" : "Show Filters"}
        </button>}
      {loadingCategories
        ? <Loading> Loading categories...</Loading>
        : shortCategories.map(category =>
            <span
              class={`pill typography typography--pill ${mobileVisibility} ${showIfActive(
                category
              )}`}
              key={category.id}
              onClick={() => {
                setShowFullList(false);
                changeFilter(category);
              }}
            >
              {category.label}
            </span>
          )}
      {!loadingCategories &&
        <button
          class={`pill pill__action typography typography--pill typography--link hide-mobile ${showFullList
            ? "arrow-up"
            : "arrow-down"}`}
          onClick={() => {
            setShowFullList(value => !value);
          }}
        >
          {showFullList ? "Hide" : "View all"}
        </button>}
    </div>
  );
}

Filters.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, label: PropTypes.string })
  ),
  onClick: PropTypes.func
};

export default Filters;
