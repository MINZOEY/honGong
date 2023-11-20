import './App.css';
import Die from './Die';
import Greeter from './Greeter';
function App() {
  return (
    <>
    <Greeter person= 'Joy' from='Colt'/> 
    <Greeter from='Elton' /> 
    <Greeter person= 'Ted'  /> 
    <Die  numSides = {20} />
    <Die   />
    <Die  numSides = {10} />
    </>
  )
}

export default App
