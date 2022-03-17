import './App.css';
import Display from "./components/Display"
import Operators from './components/Operators';
import Numbers from './components/Numbers';
import { useState } from "react" 
import { evaluate } from "mathjs"

const App = () => {
  const [input, setInput] = useState("")

  const calculate = (button) =>{
    if(button === "="){
      const result = evaluate(input)
      setInput(result)
    } else if (button === "c"){
      setInput("0")
    } else {
      setZero(button)
    }
  }

  // BUTTON
  const handleClick = (event) =>{
    const display = event.target.innerText
    calculate(display);
  }

  const setZero = (value)=>{
      if(input === "0") {
        setInput(value)
        return 
      }
      setInput(input + value)
  };


  return ( 
    <div className="App">
      <h1>My Calculator</h1>
      <Display input={input} />
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </div>
   );
}
 
export default App ;