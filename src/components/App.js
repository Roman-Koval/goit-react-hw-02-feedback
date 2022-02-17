import React, { Component } from "react";

import Statistics from './Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

// import Wrap from "./";
// import "./index.css";
// import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addingScore = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positiveFeedback = Number.parseInt(
      (good * 100) / (good + neutral + bad)
    );
    return isNaN(positiveFeedback) ? 0 : `${positiveFeedback} %`;
  };

  render() {
    const nameButtons = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={nameButtons}
            onLeaveFeedback={this.addingScore}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification title="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;