import './App.css'
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing'
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';

function App() {
 

  return (
    <div>
     <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main-page" component={MainPage} />
      </Switch>
    </div>
  )
}

export default App
