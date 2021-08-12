import { Switch, Route } from 'react-router-dom';

//-- Importamos
import LandingPage from './4_components/1_Landing/landing';
import Home from './4_components/2_Home/home';
import Detail from './4_components/3_Detail';
import Add  from './4_components/4_Create'

import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home"   component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/add"    component={Add} />
        
      </Switch>
    </div>
  );
}

export default App;
