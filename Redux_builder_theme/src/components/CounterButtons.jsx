import React from 'react'
import { handleDecrement, handleIncrement } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const CounterButtons = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.CounterReducer);
  return (
    <div>
      <div>
        <button onClick={() => handleIncrement(dispatch)}>Add</button>
        <button onClick={() => handleDecrement(dispatch)} disabled={count === 0}>Reduce</button>
      </div>
    </div>
  )
}

export default CounterButtons