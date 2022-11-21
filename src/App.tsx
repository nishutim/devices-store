import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch } from './hooks/redux';
import { checkAuth } from './store/reducers/auth/thunk-creators';
import Header from './components/Header';
import Content from './components/Content';
import Preloader from './components/Preloader';

const App = () => {
  const [initialized, setInitialized] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth())
      .then(() => setInitialized(true));
  }, []);

  return (
    <div className="wrapper">
      {initialized ?
        <>
          <Header />
          <Content />
        </>
        :
        <Preloader />
      }
    </div>
  );
}

export default App;