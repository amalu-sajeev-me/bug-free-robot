import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contactsection from './Components/Contactus/Contactsection';
import Signup from './Components/Login/Signup';
import Signin from './Components/Login/Signin';
import Feature from './Components/Features/Feature';
import Dashboard from './Components/Dashboard/Dashboard';
import Notification from './Components/Notification/Notification';
import Messages from './Components/Messages/Messages';
import Help from './Components/Help/Help';
import Profile from './Components/profile/Profile';
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
      <Route path='/notification' component={Notification} />
      <Route path='/message' component={Messages} />
      <Route path='/help' component={Help} />
      <Route path='/profile' component={Profile} />
    </Switch>
    </>
    </div>
  )
}
export default App;
