import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/thread/action';
import ThreadInput from '../components/Thread/ThreadInput';

const AddThreadPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };
  return (
    <section className="mt-2 mx-48">
      <div className="mb-4">
        <h2 className="font-semibold text-center text-3xl my-4 text-yellow-800">Buat Thread</h2>
      </div>
      <ThreadInput addThread={onAddThread} />
    </section>
  );
};

export default AddThreadPage;
