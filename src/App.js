
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Result from './components/Result';



function App() {
  

  // cara terima data dari redux aka store-nya
  const {total} = useSelector((rootReducer)=>rootReducer.Reducer)
  console.log(total)
  const dispatch = useDispatch();


   const handleDecrease = () => {
   let newTotal = total-1;

   dispatch({
    type:'KURANG',
    payload: newTotal,
   })
   }
   const handleIncrease = () => {
    let newTotal =total+1;

    dispatch({
      type:'TAMBAH',
      payload: newTotal,
    })
   }
  return (
   <div className='counter'>
    <div className='counter-top'>
      <h1>{total}</h1>
      <Button variant="primary"  onClick={handleIncrease}>+</Button>
      <Button variant="primary" onClick={handleDecrease}>-</Button>
    </div>
    <div className='counter-bottom'>
      <h2>Counter</h2>
      
    </div>
   </div>
  );
}

export default App;
