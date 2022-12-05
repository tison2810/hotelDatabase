import Home from './components/Home/Home';
import Employee from './components/Function/Employee';
import Customer from './components/Function/Customer';
import Product from './components/Function/Product';
import WareHouse from './components/Function/Warehouse';
import Report from './components/Function/Report';
import {Routes,Route, Link} from 'react-router-dom'


function App() {
  return (
    <div>
      <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Employee/>} />
      </Routes>
      
        </div>
    
  );
}


export default App;
