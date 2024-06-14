// CategoryList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories, onCategoryClick }) => (
  <div className="m-6 border-solid border-2 rounded-lg border-[#E8CDAE] p-6 ">
    <h2 className="mb-4 font-semibold text-yellow-800 text-xl">Kategori Popular</h2>
    <div className="grid grid-cols-3 gap-2 w-1/2">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          text={category}
          onClick={() => onCategoryClick(category)}
        />
      ))}
    </div>
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryList;
