import LeaderboardList from '../components/Leaderboard/LeaderboardList';

const meta = {
  title: 'Components/Leaderboards',
  component: LeaderboardList,
};

export default meta;

export const LeaderboardLists = {
  args: {
    leaderboards: [
      {
        user: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
        },
        score: 10,
      },
      {
        user: {
          id: 'users-2',
          name: 'Jane Poe',
          email: 'jane@example.com',
          avatar: 'https://ui-avatars.com/api/?name=Jone+Poe&background=random',
        },
        score: 5,
      },
      {
        user: {
          id: 'users-3',
          name: 'Jano Loe',
          email: 'Jano@example.com',
          avatar: 'https://ui-avatars.com/api/?name=Jone+Loe&background=random',
        },
        score: 5,
      },
    ],
  },
};
