import './App.css';
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
  );
}

export default App;
