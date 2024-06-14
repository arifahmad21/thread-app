import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

const LeaderboardList = ({ leaderboards }) => (
  <div className="m-7">
    <header className="bg-yellow-800 p-2 mb-2 rounded-lg">
      <p className="leaderboards-list__user-label font-semibold text-slate-100 pl-2">Users Score</p>
    </header>
    <div className="leaderboards-list__item">
      {
          leaderboards.map((leaderboard, index) => (
            // eslint-disable-next-line react/no-array-index-key, react/jsx-props-no-spreading
            <LeaderboardItem key={index} {...leaderboard} />
          ))
        }
    </div>
  </div>
);

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
