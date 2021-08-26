import logo from './logo.svg';
import './App.css';

import HomePage from './components/home-page/home';

//Import routing
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
