/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi, } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from '../LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    // Action
    await userEvent.type(emailInput, 'ariff@gmail.com');
    // Assert
    expect(emailInput).toHaveValue('ariff@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');
    // Action
    await userEvent.type(passwordInput, 'yeamplow');
    // Assert
    expect(passwordInput).toHaveValue('yeamplow');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'ariff@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'yeamplow');
    const loginButton = await screen.getByRole('button', { name: 'Login' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'ariff@gmail.com',
      password: 'yeamplow',
    });
  });
});
