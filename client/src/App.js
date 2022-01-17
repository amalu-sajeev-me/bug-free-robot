import './App.css';
import About from './Components/About/About';
import Contactsection from './Components/Contactus/Contactsection';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import List from './Components/Home/List';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <List/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contactsection}/>
      <Footer/>
      
    </div>
  );
}

export default App;
