
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Result from './components/Result';
import { handleIncrease, handleDecrease } from './Redux/actions/counterAction';
import { handleLogin } from './Redux/actions/authaction';



function App() {
  

  // cara terima data dari redux aka store-nya
 // const {isLogin} = useSelector((rootReducer)=>rootReducer.authReducer)
  // const {total} = useSelector((rootReducer)=>rootReducer.counterReducer)
  // console.log(total)

  const {authReducer,counterReducer}=useSelector((rootReducer)=>rootReducer);
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(handleIncrease(counterReducer))
  }
  const onMin = () => {
    dispatch(handleDecrease(counterReducer))
  }
  
  const onLogin = () => {
    dispatch(handleLogin(authReducer))
  }
  
  return (
   <div className='counter'>
    <div className='counter-top'>
      <h1>{counterReducer.total}</h1>
      <Button variant="primary"  onClick={onAdd}>+</Button>
      <Button variant="primary" onClick={onMin}>-</Button>
    </div>
    <div className='counter-bottom'>
      
      {authReducer.isLogin?<h3>sudahh login</h3>:<h3>Silahkan Login</h3>}
      <button onClick={onLogin}>{authReducer.isLogin ? "logout" : "login"}</button>
    </div>
   </div>
  );
}

export default App;
