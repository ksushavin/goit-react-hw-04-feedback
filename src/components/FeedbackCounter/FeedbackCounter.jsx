import { useState } from 'react';
import Statistics from 'components/FeedbackCounter/Statistics'
import FeedbackOptions from 'components/FeedbackCounter/FeedbackOptions'
import Section from 'components/FeedbackCounter/Section'
import Notification from 'components/FeedbackCounter/Notification'

export default function FeedbackCounter() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => {
        return good + neutral + bad
    }

    const onLeaveFeedback = (propertyName) => {
        switch (propertyName) {
            case 'good':
                setGood(prevstate => prevstate + 1);
                break;
            
            case 'neutral':
                setNeutral(prevstate => prevstate + 1);
                break;
            
            case 'bad':
                setBad(prevstate => prevstate + 1);
                break;
            
            default:
                console.log("Invalid propertyName");
        }
    }


    const total = countTotalFeedback();
    
    const countPositiveFeedbackPercentage = () => {
        const result = (good / total) * 100
        return Number(result.toFixed(2));
    }
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
            </Section>
            <Section title="Statistics">
                {!total ?
                    <Notification message="There is no feedback" />
                    :
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                }
            </Section>
        </>
    )
}
