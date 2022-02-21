import React, { Component } from "react";

import Statistics from './Statistics';
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  };

  onButtonClick = name => {
      this.setState(prev => {
          return {
              [name]: prev[name] + 1,
          };
      });
  };

  countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      const positiveFeedback = Number.parseInt(
          (good / (good + neutral + bad)) * 100
      );
      return isNaN(positiveFeedback) ? '0' : `${positiveFeedback} %`;
  };

  countTotalFeedback = () => {
      const { good, bad, neutral } = this.state;
      return good + bad + neutral;
  };

  render() {
      const buttonLabels = Object.keys(this.state);
      const { good, bad, neutral } = this.state;
      return (
          <>
              <Section title="Please leave feedback">
                  <FeedbackOptions
                      options={buttonLabels}
                      onLeaveFeedback={this.onButtonClick}
                  />
              </Section>

              <Section title="Statistic">
                  {this.countTotalFeedback() === 0 ? (
                    <Notification title="No feedback given" />
                  ) : (
                      <Statistics
                          total={this.countTotalFeedback()}
                          good={good}
                          neutral={neutral}
                          bad={bad}
                          positive={this.countPositiveFeedbackPercentage()}
                      />
                  )}
              </Section>
          </>
      );
  }
}

export default App;