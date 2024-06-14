import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/Auth/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate('/');
  };

  return (
    <section className="min-h-screen">
      <article className="justify-center flex flex-col p-16 mx-24">
        <h2 className="font-light text-5xl pb-20">Create your account</h2>
        <RegisterInput register={onRegister} />

        <p className="text-gray-700">
          Already have an account?
          {' '}
          <Link className="text-yellow-800 underline" to="/">
            Login here
          </Link>
        </p>
      </article>
    </section>
  );
};

export default RegisterPage;
