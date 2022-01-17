import './App.css';
<<<<<<< HEAD
import About from './Components/About/About';
import Contactsection from './Components/Contactus/Contactsection';

function App() {
  return (
    <div className="App">
      <About/>
      <Contactsection/>
      
    </div>
=======
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import List from './Components/Home/List';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <List />
    <Switch>
      <Route path='/' component={Home}/>
      {/* <Route path='/About' component={About}/>
      <Route path='/Feature' component={Feature}/>
      <Route path='/Contact' component={Contact Us}/> */}
    </Switch>
      <Footer/>
    </>
>>>>>>> ab1e6952a887495350a88e23858d9a1ed9a089e6
  );
}

export default App;
