/**
* test scenario for leaderboardsReducer
*
* - threadReducers function
*  - should return the initial state when given by unknown action
*  - should return the thread when given by RECEIVE_LEADERBOADS action

*/

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer', () => {
  it('should return the initial state when given by UNKNOWN action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 5,
          },
        ],
      },

    };
    // Action
    const nextState = leaderboardsReducer(initialState, action);
    // Assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
