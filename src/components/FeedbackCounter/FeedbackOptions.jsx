import PropTypes from "prop-types";
import css from 'components/FeedbackCounter/FeedbackCounter.module.css'

export default function FeedbackOptions({ onLeaveFeedback }) {
    const { counterControls, button } = css;
    return (
        <div className={counterControls}>
            <button 
                onClick={() => onLeaveFeedback("good")}
                className={button} 
                type="button">Good
            </button>
            <button 
                onClick={() => onLeaveFeedback("neutral")}
                className={button} 
                type="button">Neutral
            </button>
            <button 
                onClick={() => onLeaveFeedback("bad")}
                className={button} 
                type="button">Bad
            </button>
        </div>    
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired, 
}
