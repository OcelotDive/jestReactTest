import React, {useState} from 'react';
import useForm from "react-hook-form";
import TestClass from './components/TestClass';
import './App.css';

function App() {

  const data = {
    prop1: "string",
    prop2: 5
  }

  let [useData, setData] = useState(data);
  let [count, setCount] = useState(0);

  let [register, handleSubmit, errors] = useForm();

  
    const increment = () => {
      setCount(precount => {
        return precount + 1;
      })
      let objKey = "prop" + count;
      setData(preObj => {
        return {
          ...preObj,
         [objKey]: count
        }
      })
      console.log(useData)
    }


    const decrement = () => {
      setCount(prevCount => {
        return prevCount - 1 === -1 ? 0 : prevCount - 1;
      });
    }

    const onSubmit = (data) => {
      console.log(data)
    }
  

  return (
    <div className="App">
      <h1 >data</h1>
      <TestClass data={data}/>
      <button id="clickButton" onClick={increment}>click</button>
      <div id="counter-value" onHover={decrement}>{count}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" name="email" ref={register({required: "Valid email required"})}/>
        <input type="password" placeholder="Password" name="password" ref={register({required: "Password required", minLength: {value: 8, message: "minimum length not met"}})}/>
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}

export default App;
