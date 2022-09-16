import React from 'react';
import Statistics from 'components/FeedbackCounter/Statistics'
import FeedbackOptions from 'components/FeedbackCounter/FeedbackOptions'
import Section from 'components/FeedbackCounter/Section'
import Notification from 'components/FeedbackCounter/Notification'

export default class FeedbackCounter extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }        

    onLeaveFeedback = (propertyName) => {
        this.setState((prevState) => {
            const value = prevState[propertyName];
            return {
                [propertyName]: value + 1
            }
        })
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        return  good+neutral+bad
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const positiveValue = this.state.good;
        const result = (positiveValue / total) * 100
        return Number(result.toFixed(2));
    }
    
    render() {
        const { onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
        const { good, neutral, bad } = this.state;
        const total = countTotalFeedback();
        const positivePercentage = countPositiveFeedbackPercentage();
        
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
                </Section>
                <Section title="Statistics">
                    {!total ?
                        <Notification message="There is no feedback"/>
                        :
                        <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />}   
                </Section>
            </>
        )
    }
}