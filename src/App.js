// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Data from './Data';
import { useState } from 'react';

function App() {

  const [money, setMoney] = useState(0);

  const addMoney=()=>{
    console.log("add");
    let newMoney = money+1;
    setMoney(newMoney)
  }
  const withdrawMoney=()=>{
    console.log("minus");
  }

  return (
   <>
    <Navbar money={money}/>
    <Data addMoney={addMoney} withdrawMoney={withdrawMoney}/>
   </>
  );
}

export default App;
