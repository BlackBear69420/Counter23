import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Authentication from './components/Authentication';
import CounterList from './components/CounterList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact Component={Signup}/>
          <Route path='/login' exact Component={Login}/>
          <Route path='/count' exact Component={CounterList}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
