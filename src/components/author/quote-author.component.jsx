
import './quote-author.style.scss';

const AuthorQuote = (props) =>{
    return(
        <div>
            <div className="quote-text">
                <i className="fas fa-quote-left"></i>
                <span id="quote">{props.value}</span>
            </div>
            <div className="quote-author">
                {/* <span id="author">{(props.value.author)}</span> */}
            </div>
        </div>
       
    );
        
}
export default AuthorQuote;