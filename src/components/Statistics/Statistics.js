import { Component } from "react";
import PropTypes from "prop-types";
import { Li } from "./Statistics.styled";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <ul>
          <Li>
            <span>Good: {good}</span>
          </Li>
          <Li>
            <span>Neutral: {neutral}</span>
          </Li>
          <Li>
            <span>Bad: {bad}</span>
          </Li>
          <Li>
            <span>Total: {total}</span>
          </Li>
          <Li>
            <span>Positive feedback: {positivePercentage}</span>
          </Li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;
