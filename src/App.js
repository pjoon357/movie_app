import PropTypes from "prop-types";

function ToDo({name}){
  return <h1>I will study {name}</h1>
}

ToDo.propTypes={
  name: PropTypes.string.isRequired
};

const whats=[
  {
    id: 1,
    name: "ReactJs"
  },
  {
    id: 2,
    name: "React Native"
  }, 
  {
    id: 3,
    name: "Js"
  }];

function App() {
  return (
    <div className="App">
      {whats.map(what=>(
      <ToDo key={what.id} name={what.name}/>
      ))}
    </div>
  );
}

export default App;
