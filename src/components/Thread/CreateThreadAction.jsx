import React from 'react';
import { Link } from 'react-router-dom';

const ThreadAddAction = () => (
  <div className="flex fixed gap-4 bottom-8 right-8">
    <Link to="/add">
      <button type="button" className="text-4xl bg-yellow-800 text-white cursor-pointer shadow-md px-3 py-2 rounded-full hover:bg-[#E8CDAE] focus:outline-none focus:ring-2 focus:ring-gray-500">+</button>
    </Link>
  </div>
);

export default ThreadAddAction;
