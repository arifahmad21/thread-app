import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardItem = ({ user, score }) => (
  <div className="leaderboard-item flex items-center justify-between border-b border-gray-300 py-2">
    <div className="leaderboard-item__user-info flex items-center">
      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
      <p className="text-lg font-medium">{user.name}</p>
    </div>
    <p className="leaderboard-item__score text-lg font-medium">{score}</p>
  </div>
);

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
