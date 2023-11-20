import './App.css';
import Die from './Die';
import DoubleDice from './DoubleDice';
import Greeter from './Greeter';
import ListPicker from './ListPicker';
function App() {
  return (
    <>
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />
    {/* <ListPicker values={[1,2,3,4,5]}/>
    <ListPicker values={['a','b','c']}/> */}
    {/* <Greeter person= 'Joy' from='Colt'/> 
    <Greeter from='Elton' /> 
    <Greeter person= 'Ted'  /> 
    <Die  numSides = {20} />
    <Die   />
    <Die  numSides = {10} /> */}
    </>
  )
}

export default App
