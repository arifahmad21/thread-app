/**
 * skenario test
 *
 * - asyncPopulateUsersAndTalks thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import {
  describe, beforeEach, afterEach, expect, it, vi,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncGetLeaderboards, receiveLeaderboardsActionCreator } from './action';

const fakeErrorResponse = new Error('Ups, something went wrong');

const fakeLeaderboardResponse = [
  {
    id: 'users-123',
    name: 'Arif',
    email: 'ariff@gmail.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

describe('asyncGetLeaderboards', () => {
  beforeEach(() => {
    api._getLeaderboard = api.getLeaderboard;
  });

  afterEach(() => {
    api.getLeaderboard = api._getLeaderboard;

    // delete backup data
    delete api._getLeaderboard;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboardResponse);

    const dispatch = vi.fn();
    // Action
    await asyncGetLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // Arrange
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    window.alert = vi.fn();

    // Action
    await asyncGetLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
