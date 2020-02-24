import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import Text from './components/Text/index';

const App = () => {
  return (
    <div>
      <Routes />
      <Text color="greenish" size="medium" text="It is a text" />
    </div>
  );
}

export default App;
