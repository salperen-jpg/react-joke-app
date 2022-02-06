import React from 'react';
import { useGlobalJokeContext } from '../context';
import './styles/modal.scss';
import { MdClose } from 'react-icons/md';

const Modal = () => {
  const { modal, singleJoke, closeModal } = useGlobalJokeContext();
  const { setup, delivery, joke } = singleJoke;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <div className={`${modal ? 'modal show' : 'modal'}`}>
      <div className='modal-container'>
        <button type='button' className='modal-btn' onClick={closeModal}>
          <MdClose />
        </button>
        <div className='joke'>
          <span className='setup'>{setup || joke}</span>
          <span className='delivery'>{delivery}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
