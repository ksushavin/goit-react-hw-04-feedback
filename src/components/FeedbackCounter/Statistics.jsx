import PropTypes from "prop-types";
import css from 'components/FeedbackCounter/FeedbackCounter.module.css'

export default function Statistics(props) {
    const {
        good,
        neutral,
        bad,
        total,
        positivePercentage } = props;

    return (
        <ul className={css.statisticsList}>
            <li className={css.item}>
                <p className={css.text}>Good: {good}</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Neutral: {neutral}</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Bad: {bad}</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Total: {total}</p>
            </li>
            <li className={css.item}>
                <p className={css.text}>Positive feedback: {positivePercentage}</p>
            </li>
        </ul>
    )
}

Statistics.propTypes = {
    props: PropTypes.objectOf(PropTypes.number), 
}

