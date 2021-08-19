import { Switch, Route } from 'react-router-dom';
import LandingPage from './4_components/1_Landing/landing';
import Home        from './4_components/2_Home/0_Home/home';
import Detail      from './4_components/3_Detail/detail';
import Add         from './4_components/4_Create/create';
import Error404    from './4_components/5_Error404/error404';
import About from './4_components/6_About/about';
import './App.css';

function App() {
  return (
    <div className="App">
         <Switch>
          <Route exact path="/"     component={LandingPage} />
          <Route exact path="/home"       component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/add"        component={Add} />
          <Route exact path="/about"      component={About} />
          <Route path="*"           component={Error404} />
        </Switch>
    </div>
  );
}

export default App;
