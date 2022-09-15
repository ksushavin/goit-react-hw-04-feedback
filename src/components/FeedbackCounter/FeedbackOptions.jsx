import PropTypes from "prop-types";
import css from 'components/FeedbackCounter/FeedbackCounter.module.css'

export default function FeedbackOptions ({ onLeaveFeedback }) {
    return (
        <div className={css.counterControls}>
            <button 
                onClick={() => onLeaveFeedback("good")}
                className={`${css.button} ${css.btnGood}`} 
                type="button">Good
            </button>
            <button 
                onClick={() => onLeaveFeedback("neutral")}
                className={`${css.button} ${css.btnGood}`} 
                type="button">Neutral
            </button>
            <button 
                onClick={() => onLeaveFeedback("bad")}
                className={`${css.button} ${css.btnGood}`} 
                type="button">Bad
            </button>
        </div>    
    )
  
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired, 
}
