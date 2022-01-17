import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Login/Signup';
import Signin from './Components/Login/Signin';
import List from './Components/Home/List';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contactsection from './Components/Contactus/Contactsection';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import List from './Components/Home/List';
import {Route} from 'react-router-dom';
function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <List/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contactsection}/>
      <Footer/>
      
    </div>
=======
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
>>>>>>> 8ffef59d805b870fca44e051da82f9678a2d1ec7
  );
}
export default App;
