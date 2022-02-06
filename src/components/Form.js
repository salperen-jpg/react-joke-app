import React from 'react';
import { useGlobalJokeContext } from '../context';
import './styles/form.scss';

const Form = () => {
  const { joke, handleChange, handleSubmit, error } = useGlobalJokeContext();
  return (
    <article className='form-container'>
      <div className='section-center'>
        <form>
          {/* CATEGORY */}
          <div className='form-element'>
            <label htmlFor='category'>Category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={joke.category}
              onChange={handleChange}
            >
              <option value='Coding'>Coding</option>
              <option value='Halloween'>Halloween</option>
              <option value='Miscellaneous'>Miscellaneous</option>
            </select>
          </div>
          {/* LANGUAGE */}
          <div className='form-element'>
            <label htmlFor='language'>Language</label>
            <select
              name='language'
              id='language'
              className='form-input'
              value={joke.language}
              onChange={handleChange}
            >
              <option value='en'>English</option>
              <option value='de'>German</option>
              <option value='ru'>Russian</option>
              <option value='fr'>French</option>
            </select>
          </div>
          {error.show && <p className='error'>{error.msg}</p>}
          <div className='form-action'>
            <button
              type='submit'
              className='form-submit'
              onClick={handleSubmit}
            >
              Joke
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Form;
