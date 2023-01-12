
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Result from './components/Result';


function App() {
  const [num,setNum]= useState(0)

  // cara terima data dari redux aka store-nya
  const {total} = useSelector((state)=>state)
  console.log(total)

   const handleDecrease = () => {
    setNum(num-1);
   }
   const handleIncrease = () => {
    setNum(num+1);
   }
  return (
   <div className='counter'>
    <div className='counter-top'>
      <h1>{num}</h1>
      <Button variant="primary" onClick={handleIncrease}>+</Button>
      <Button variant="primary" onClick={handleDecrease}>-</Button>
    </div>
    <div className='counter-bottom'>
      <h2>Counter</h2>
      <Result/>
    </div>
   </div>
  );
}

export default App;
