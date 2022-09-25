import React, { useContext, useState } from 'react';
import axios from 'axios';

const JokeContext = React.createContext();

// https://v2.jokeapi.dev/joke/Miscellaneous?lang=en
const API_ENDPOINT = 'https://v2.jokeapi.dev/joke';

export const AppProvider = ({ children }) => {
  const [joke, setJoke] = useState({
    category: 'Coding',
    language: 'en',
  });
  const [singleJoke, setSingleJoke] = useState();
  const [error, setError] = useState({ show: false, msg: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setJoke({ ...joke, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let url = `${API_ENDPOINT}/${joke.category}?lang=${joke.language}`;
    fetchJoke(url);
  };

  const fetchJoke = async (url) => {
    setIsLoading(true);
    toggleError();
    const response = await axios(url).catch((err) => console.log(err));
    console.log(response);
    if (response.data.error) {
      toggleError(true, 'Joke could not find please try again');
    } else {
      setSingleJoke(response.data);
      setIsLoading(false);
      setModal(true);
    }
    setIsLoading(false);
  };

  const toggleError = (show = false, msg = '') => {
    setError({ show, msg });
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <JokeContext.Provider
      value={{
        joke,
        error,
        isLoading,
        handleChange,
        handleSubmit,
        modal,
        singleJoke,
        closeModal,
      }}
    >
      {children}
    </JokeContext.Provider>
  );
};

export const useGlobalJokeContext = () => {
  return useContext(JokeContext);
};
