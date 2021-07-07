import './homepage.style.scss';
import React from 'react';
import AuthorQuote from '../components/author/quote-author.component';
import Buttons from '../components/buttons/button-new.component';

class HomePage extends React.Component{
    constructor(){
        super();

        this.state ={ 
            quotes: []

        }
    }
  
    componentDidMount(){
    
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(async quote => this.setState({quotes: quote}))
    }
    render(){
        // const ar =[1,2,3,4];
        // const ar1 =ar.map(())
        const {quotes}= this.state;
        const quoteNum = quotes[Math.trunc(Math.random()*quotes.length)+1]
        // const newQuote = () =>{
        //     for(let i = 0; i < 10; i++){
        //         // return this.state.quotes[Math.trunc(Math.random()*this.state.quotes.length)+1];
        //         console.log(this.state.quotes[Math.trunc(Math.random()*this.state.quotes.length)+1]);
        //     }
            
        // }
        return(
            <div className="quote-container"  id="quote-container">
                <AuthorQuote/>
                <Buttons/>
                {console.log(quoteNum)}
                {/* <div>{console.log(this.state.quotes[0])}</div> */}
            </div>
        );
    }
}
export default HomePage;