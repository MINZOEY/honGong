import './App.css';
import ColorList from './ColorList';
import Die from './Die';
import DoubleDice from './DoubleDice';
import Greeter from './Greeter';
import Heading from './Heading';
import ListPicker from './ListPicker';
import ShoppingList from './ShoppingList';
import Slots from './Slots';

const data = [
  {id: 1, item : 'eggs', quantity: 15, completed: false},
  {id: 2, item : 'milk', quantity: 1, completed: true},
  {id: 3, item : 'bread', quantity: 5, completed: true},
  {id: 4, item : 'carrots', quantity: 3, completed: false},
  {id: 5, item : 'orange', quantity: 12, completed: true},
]
function App() {
  return (
    <>
    <ShoppingList items={data}  />

      {/* <Slots val1='🍒' val2='🍒' val3='🍒'/>
      <Slots val1='🍒' val2='🍌' val3='🍑'/>

      <ColorList colors={['green', 'orange', 'pink', 'gray'] }/>
      <ColorList colors={['olive', 'red', 'slategrey', 'blue'] }/>

      <Heading color ='magenta' text='welcome!' fontSize='20px'/>
      <Heading color ='teal' text='blah!' fontSize='30px' />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ListPicker values={[1,2,3,4,5]}/>
      <ListPicker values={['a','b','c']}/>
      <Greeter person= 'Joy' from='Colt'/> 
      <Greeter from='Elton' /> 
      <Greeter person= 'Ted'  /> 
      <Die  numSides = {20} />
      <Die   />
      <Die  numSides = {10} /> */}
    </>
  )
}

export default App
