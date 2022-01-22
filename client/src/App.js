import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contactsection from './Components/Contactus/Contactsection';
import Signup from './Components/Login/Signup';
import Signin from './Components/Login/Signin';
import Feature from './Components/Features/Feature';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <div className='bg'>
    <>    
    
    <Switch>  
      <Route path='/' exact component={Home}/>
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      <Route path='/About' component={About}/>
      <Route path='/Feature' component={Feature}/>
      <Route path='/Contact' component={Contactsection}/>
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
    </>
    </div>
  )
}
export default App;
