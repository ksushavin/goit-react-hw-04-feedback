import PropTypes from "prop-types";
import css from 'components/FeedbackCounter/FeedbackCounter.module.css'

export default function Statistics(props) {
    const {
        good,
        neutral,
        bad,
        total,
        positivePercentage } = props;
    const { statisticsList, item, text } = css;

    return (
        <ul className={statisticsList}>
            <li className={item}>
                <p className={text}>Good: {good}</p>
            </li>
            <li className={item}>
                <p className={text}>Neutral: {neutral}</p>
            </li>
            <li className={item}>
                <p className={text}>Bad: {bad}</p>
            </li>
            <li className={item}>
                <p className={text}>Total: {total}</p>
            </li>
            <li className={item}>
                <p className={text}>Positive feedback: {positivePercentage}</p>
            </li>
        </ul>
    )
}

Statistics.propTypes = {
    props: PropTypes.objectOf(PropTypes.number), 
}

