import './App.css';
import Home from './components/Home/Home';
import Employee from './components/Function/Employee';
import Customer from './components/Function/Customer';
import Product from './components/Function/Product';
import WareHouse from './components/Function/Warehouse';
import Report from './components/Function/Report';


function App() {
  return (
    <>
      <Home/>
      <div style={{display:'flex', justifyContent:'space-around', width:'100%', marginTop:'100px', gap:'10px', marginLeft:'10px', marginRight:'10px'}}>
        <Employee />
        <Customer />
        <Product />
        <WareHouse />
        <Report />
      </div>
    </>
  );
}

export default App;
