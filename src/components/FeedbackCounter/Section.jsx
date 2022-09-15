import PropTypes from "prop-types";
import css from 'components/FeedbackCounter/FeedbackCounter.module.css'

export default function Section({ title, children }) {
    return (
        <div className={css.feedbackWrapper}>
            <h1 className={css.title}>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired, 
}
