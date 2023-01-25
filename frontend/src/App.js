import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'


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
    </div>
  );
}

export default App;
