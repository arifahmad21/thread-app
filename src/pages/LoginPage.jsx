/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/Auth/LoginInput';
import { asyncSetAuthUser } from '../states/auth/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="min-h-screen">
      <article className="justify-center flex flex-col p-16 mx-24">
        <h2 className="font-light text-5xl pb-20">
          <strong className="text-yellow-800">Login</strong> Here
        </h2>
        <LoginInput login={onLogin} />
        <p className="text-gray-700">
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className="text-yellow-800 underline">
            click to register
          </Link>
        </p>
      </article>
    </section>
  );
};

export default LoginPage;
