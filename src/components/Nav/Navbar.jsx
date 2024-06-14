import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ authUser, signOut }) => {
  const { id, name } = authUser;

  return (
    <div className="navigation bg-[#E8CDAE] text-white py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold" style={{ textDecoration: 'none' }}>
        <span className="text-yellow-800">Welcome,</span>
        {' '}
        <span className="text-slate-200">{authUser.name}</span>
      </Link>
      <nav className="flex flex-row text-2xl">
        <Link to="/" className="nav-link flex items-center mr-4 hover:text-yellow-800">
          Thread
        </Link>
        <Link to="/leaderboard" className="nav-link flex items-center hover:text-yellow-800">
          Leaderboard
          {' '}
        </Link>
      </nav>
      <div className="nav__user-info flex items-center">
        <button type="button" onClick={signOut} className="bg-yellow-800 hover:bg-[#856e52] px-3 py-3 rounded-md text-sm">
          Log out
        </button>
      </div>
    </div>
  );
};

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
