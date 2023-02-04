import React, { Component } from "react";

import { Section } from "./Section";
import { Feedback } from "./Feedback";
import { Statistics } from "./Statistics";

export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  addFeedback = (e) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState.value + 1 };
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return  good + neutral + bad;
  }

  // countPositiveFeedbackPercentage = () => {
  //   return positivePercentage = good
  // }


  render() {
const { good, neutral, bad } = this.state;


     return (
       <div>
         <Section title="Please leave feedback">
           <Feedback options={Object.keys(this.state)} />
         </Section>
         <Section title="Statistics">
           <Statistics good={good} neutral={neutral} bad={bad}
            //  total={total} positivePercentage={positivePercentage}
           />
          </Section>
    </div>
  );
  }
 
};
