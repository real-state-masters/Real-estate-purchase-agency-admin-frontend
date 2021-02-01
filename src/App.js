import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import DashboardFrame from './components/DashboardFrame/DashboardFrame';
import './App.scss';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/sign-in">
            <LoginPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
          <Route path="/dashboard">
            <DashboardFrame />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
