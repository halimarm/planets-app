import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './theme/globalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
