import PropTypes from "prop-types";
// import css from 'components/FeedbackCounter/FeedbackCounter.module.css'

export default function Notification ({ message }) {
    return (
      <p>{message}</p>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired, 
}

