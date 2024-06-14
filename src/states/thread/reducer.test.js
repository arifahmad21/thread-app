/**
* test scenario for threadReducer
*
* - threadReducers function
*  - should return the initial state when given by unknown action
*  - should return the thread when given by RECEIVE_THREADS action
*  - should return the thread with the new thread when given by ADD_THREAD action
*  - should return the thread with the toggled like thread when given by TOGGLE_UPVOTE_THREAD and TOGGLE_DOWNVOTE_THREAD action
*
*/

import { describe, it, expect } from 'vitest';
import threadReducer from './reducer';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = threadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_THREADS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };
    // Action
    const nextState = threadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the thread with the new thread when given by ADD_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread Kedua',
          category: 'General',
          createdAt: '2021-07-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // Action
    const nextState = threadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the thread with the toggled like thread when given by TOGGLE_UPVOTE_THREAD AND TOGGLE_DOWNVOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];

    const action = {
      type: 'TOGGLE_UPVOTE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
        voteType: 1,
      },
    };

    const action2 = {
      type: 'TOGGLE_DOWNVOTE_THREAD',
      payload: {
        userId: 'users-1',
        threadId: 'thread-1',
        voteType: 1,
      },
    };

    // Action
    const nextState = threadReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);

    // Action
    const nextState2 = threadReducer(initialState, action2);

    // Assert
    expect(nextState2).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
