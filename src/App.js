import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions'

function App() {
  const counter = useSelector(state => {
    return state.counter;
  });
  const isLogged = useSelector(state =>{
    return state.isLogged;
  })
  // will take any action as argument
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter - {counter}</h1>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <h4>{isLogged && <div>Hi there</div>}</h4>
    </div>
  );
}

export default App;
