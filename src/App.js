
import ResultTable from './components/result_table';
import Header from './components/header';
import UserInput from './components/form';
import { useState } from 'react';

function App() {
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const [userInput, setUserInput] = useState(null)
    const yearlyData = []; // per-year results
    if(userInput) {
      let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];
  
      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
  
    }
  
    // do something with yearlyData ...
  

  return (
    <div>
      <Header/>

      <UserInput onCalculate = {calculateHandler}/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && <p>Maaf Punyamu Kosong.</p>}
      {userInput && <ResultTable
      data = {yearlyData}/> }
 
    
    </div>
  );
}

export default App;
