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
 
  const Person = (props) => {
    return (
      <>
      <h1>Name: {props.name} </h1>
      <h2> Last Name: {props.lastName}</h2>
      <h2> Age: {props.age}</h2>
      </>
      //This is a person component that renders some JSX
      //It is called below with <Person /> essentially like a class in JS! So cool
      //To have dynamic data, you use props via attributes

      //If it is just a string you do not need curly braces, look at John vs. Jane
    )
  }
  return (
    <div className="App"> 
      <Person 
      name={'John'} 
      lastName = {'Doe'} 
      age={25}/>

      <Person 
      name="Jane" 
      lastName = "Smith" 
      age= {32}/>
      <Person 
      name="Mary" 
      lastName = "Thomas" 
      age= {67}/>
      
    </div>
  );
}

export default App;
