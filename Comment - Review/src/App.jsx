import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initialstate={

}
const reducer=(state,action)=>{
  switch (action.type){
    case 'name':
      return {...state,name:action.payload}
    case 'email':
      return {...state,email:action.payload}
    case 'city':
      return {...state,city:action.payload}
    case 'pass':
      return {...state,pass:action.payload}
    default:
      return state
  }
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  const handleform=(e)=>{
    e.preventDefault();
    console.log(state);
  }
  return (
    <div>
      <form action="" onSubmit={handleform}>
        <input onChange={(e)=>dispatch({type:"name",payload:e.target.value})} type="text" />
        <input onChange={(e)=>dispatch({type:"email",payload:e.target.value})} type="text" />
        <input onChange={(e)=>dispatch({type:"pass",payload:e.target.value})} type="text" />
        <input onChange={(e)=>dispatch({type:"city",payload:e.target.value})} type="text" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
