import { Component } from "react";
import PropTypes from "prop-types";
import { Button, List, Li } from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <List>
        {options.map(option => {
          return (
            <Li key={option}>
              <Button
                type="button"
                name={option}
                onClick={() => {
                  onLeaveFeedback(option);
              }}
          >
              {option}
              </Button>
            </Li>
          );
        })}
      </List>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

