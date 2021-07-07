
import './quote-author.style.scss';

const AuthorQuote = (props) =>{
    return(
        <div>
            <div className="quote-text">
                <i className="fas fa-quote-left"></i>
                <span id="quote">{(props.quote.text)}</span>
            </div>
            <div className="quote-author">
                {props.quote.author}
            </div>
        </div>
       
    );
        
}
export default AuthorQuote;