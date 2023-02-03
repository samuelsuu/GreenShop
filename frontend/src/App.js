import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import HowItWorks from './HowItWorks';
import Section1 from './Section1';
import Section2 from './Section2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
      <Center bg='tomato' h='300px' color='white'>
        <Heading>GREAT DEVELOPER</Heading>
      </Center>
      <Center bg='white' h='50px' color='black'>
        <Heading>you are welcome to the project</Heading>
      </Center>
      
      </header>
      <div className="sell">
       <Section1 />

       <Section2 />

       <HowItWorks />
    </div>
    </div>
  );
}

export default App;
