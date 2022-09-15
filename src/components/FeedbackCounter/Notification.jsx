import PropTypes from "prop-types";
// import css from 'components/FeedbackCounter/FeedbackCounter.module.css'

export default function Notification ({ message }) {
    return (
      <Notification message="There is no feedback"></Notification>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired, 
}

