import './App.css';
import ColorList from './ColorList';
import Die from './Die';
import DoubleDice from './DoubleDice';
import Greeter from './Greeter';
import Heading from './Heading';
import ListPicker from './ListPicker';
import Slots from './Slots';
function App() {
  return (
    <>
      <Slots val1='🍒' val2='🍒' val3='🍒'/>
      <Slots val1='🍒' val2='🍌' val3='🍑'/>
{/* 
      <ColorList colors={['green', 'orange', 'pink', 'gray'] }/>
      <ColorList colors={['olive', 'red', 'slategrey', 'blue'] }/>

      <Heading color ='magenta' text='welcome!' fontSize='20px'/>
      <Heading color ='teal' text='blah!' fontSize='30px' />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
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
