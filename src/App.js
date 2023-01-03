import {useEffect, useState} from 'react';

import './App.css';


// Remember this is not HTML, this is JS 
// Can create the variables and then make ternary operators to 
//You can't do this easily with the other one. 

//Originally in the other part, just showing some usage:
// const isNameShowing = true;
//{isNameShowing ? name: 'someone'}

//<></> React fragment-essentially a div

//Adjacent JSX elements must be wrapped in an enclosing tag, 
//Cannot have two heading in one place? Need to use a react fragment


const App = () => {
  //When we start something with use, we call that a hook
  //Setter function, first one is counter, second uses setcounter
  const [counter, setCounter] = useState(0);

  //NEVER MODIFY STATES MANUALLY 
  useEffect(() => {
    alert("You've changed the counter to" + counter)
  }, [counter]);
  

  //Trying out a state
  return (
    <div className="App"> 
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
//SETTING AN EVENT
//Mouse click, button click,
//use the counter

//This would go under the const app piece
  // const Person = (props) => {
  //   return (
  //     <>
  //     <h1>Name: {props.name} </h1>
  //     <h2> Last Name: {props.lastName}</h2>
  //     <h2> Age: {props.age}</h2>
  //     </>
  //     //This is a person component that renders some JSX
  //     //It is called below with <Person /> essentially like a class in JS! So cool
  //     //To have dynamic data, you use props via attributes

  //     //If it is just a string you do not need curly braces, look at John vs. Jane
  //   )
  // }