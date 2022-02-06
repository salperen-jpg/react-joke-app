import Form from './components/Form';
import Loading from './components/Loading';
import Modal from './components/Modal';
import './components/styles/main.scss';

import { useGlobalJokeContext } from './context';

function App() {
  const { isLoading, modal } = useGlobalJokeContext();
  if (isLoading) {
    return <Loading />;
  }
  if (modal) {
    return (
      <main>
        <Modal />
      </main>
    );
  }
  return (
    <main>
      <Form />
    </main>
  );
}

export default App;
