import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Login/Signup';
import Signin from './Components/Login/Signin';
import List from './Components/Home/List';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contactsection from './Components/Contactus/Contactsection';

function App() {
  return (
    <>
    <About/>
      <Contactsection/>
    <List />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/signup' component={Signup} />
      <Route path='/signin' component={Signin} />
      {/* <Route path='/About' component={About}/>
      <Route path='/Feature' component={Feature}/>
      <Route path='/Contact' component={Contact Us}/> */}
    </Switch>
      <Footer/>
    </>
  );
}
export default App;
