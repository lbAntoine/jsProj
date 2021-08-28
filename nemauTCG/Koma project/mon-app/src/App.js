// import logo from './logo.svg';
import './App.css';

import homeContainer from './containers/homeContainer';

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
          <Route exact path="/" component={homeContainer}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
