import HowItWorks from './HowItWorks';
import Section1 from './Section1';
import Section2 from './Section2';
import './App.css';

function Help() {
  return (
    <div className="App">
      <div className="sell">
       <Section1 />

       <Section2 />

       <HowItWorks />
    </div>
    </div>
  );
}

export default Help;
