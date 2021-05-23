import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
// import {persister, store} from './src/redux/store';
import Navigation from './src/navigation'
import {persister, store} from './src/Redux/store';
// import AppNav from './AppNav';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};
export default App;