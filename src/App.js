
import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
const App = ()=>{
  // componentDidMount(){
  //   const apiUrl = 'https://type.fit/api/quotes';
  //   try { 
  //       showLoadingSpinner();
  //       const response = await fetch(apiUrl);
  //       apiQuotes = await response.json();
  //       newQuote();
       
  //   }catch(error){
  //       //Catch Error Here
  //   }

    return (
      <div>
        <HomePage/>
      </div>
    );
  
}
export default App;
