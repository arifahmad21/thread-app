import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ text, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className=" text-sm px-2 py-2 inline-block bg-[#E8CDAE] text-gray-900 rounded-xl w-auto mr-1 mb-1 cursor-pointer"
    onClick={() => onClick(text)}
  >
    #
    {' '}
    {text}
  </button>
);

CategoryItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryItem;
