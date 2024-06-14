import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input flex flex-col items-center justify-center">
      <input
        className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <input
        className="block w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button
        className="mt-3 w-1/4 px-4 py-2 text-white bg-yellow-800 rounded-lg font-semibold cursor-pointer"
        type="button"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
