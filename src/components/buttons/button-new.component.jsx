import './button.style.scss';
const Buttons = ()=> {
    return(
        <div className="button-container">
            <button className="twitter-button" id="twitter" title="Tweet This!">
                <i className="fab fa-twitter"></i>
            </button>
            <button id="new-quote">New Quote</button>
        </div>
    );
}
export default Buttons;