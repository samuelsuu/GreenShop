import { Heading } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import HowItWorks from './HowItWorks';
import Section1 from './Section1';
import Section2 from './Section2';
import Products from './Productview';
import { ProductData} from './Productdata';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import './App.css';

function App() {
  const product = ProductData.map(item => <Products key={item.id} item={item}/>)
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

      <div className='flex-container'>  
        <h2 className='headertext'>Top Selling Items </h2>
          {product} 
          <button id='Btnright'><ArrowForwardIcon /></button>
    </div>

    <h1 id='test'>This is another paragraph</h1>
         {/* <div className="sell">
              <Section1 />
              <Section2 />
              <HowItWorks />
            </div> */}

    </div>
  );
}

const scroll = document.getElementsByClassName("flex-container") 
scroll.scrollintoview() 

const myTest = document.getElementById('test')
  myTest.style.color = "red"
  myTest.style.background = 'blue'


  

export default App;
