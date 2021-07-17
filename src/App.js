import './App.css';
import Home from './screens/home.js'
import Setup from './screens/setup.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Game from './screens/game.js'
import {Container} from 'semantic-ui-react'

const App = props => (
  <Router>
        <Switch>
              <Route exact path="/setup" component={Setup}/>
              <Route exact path="/game" component={Game}/>
              <Route exact path="/" component={Home}/>
          </Switch>
    </Router>
);


export default App;