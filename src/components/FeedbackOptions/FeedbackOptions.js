import { Component } from "react";
import PropTypes from "prop-types";
import { Button, List, Li } from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  render() {
    return (
      <List>
        {this.props.options.map((option) => {
          return (
            <Li key={option}>
              <Button
                type="button"
                name={option}
                onClick={this.props.onLeaveFeedback}
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
