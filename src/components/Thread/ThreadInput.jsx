import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

const ThreadInput = ({ addThread }) => {
  const [title, onChangeTitle] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [body, setBody] = useState('');

  const onChangeBody = (event) => {
    setBody(event.target.innerText);
  };

  return (
    <form className="m-6">
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="Judul"
        className="thread-input__title border-2 border-[#E8CDAE] rounded-md p-2 mb-2 w-full"
      />
      <input
        type="text"
        value={category}
        onChange={onChangeCategory}
        placeholder="Kategori"
        className="thread-input__category border-2 border-[#E8CDAE] rounded-md p-2 mb-2 w-full"
      />
      <div
        className="thread-input__body border-2 border-[#E8CDAE]  rounded-md p-2 mb-2 w-full h-44 "
        data-testid="input-body"
        contentEditable
        onInput={onChangeBody}
      />
      <button
        type="submit"
        onClick={() => addThread({ title, body, category })}
        className="bg-[#D4A373] hover:bg-[#E8CDAE] text-white font-bold py-2 px-4 rounded"
      >
        Add Thread
      </button>
    </form>
  );
};

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
