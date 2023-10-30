import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import TransactionHistory from './TransactionHistory';
import Addresses from './Addresses';
import TransferComponent from './TransferComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/transaction" component={TransactionHistory} />
          <Route path="/TransferComponent/:nodeAddress" component={TransferComponent} />
          <Route path="/" component={Addresses} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;