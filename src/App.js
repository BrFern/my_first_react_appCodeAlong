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
  const name = 'Jane';
  
  return (
    <div className="App"> 
      <h1> Hello, {2+2}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ): (
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
