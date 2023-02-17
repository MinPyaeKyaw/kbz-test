// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { navigation, subNavigation } from './utils/navigation';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {[...navigation, ...subNavigation].map(nav => {
            return(<Route key={nav.id} path={nav.route} element={nav.component} />)
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
