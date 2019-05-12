import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

import('./config/ReactotronConfig');

// import { Container } from './styles';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
