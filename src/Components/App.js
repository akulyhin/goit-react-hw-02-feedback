import React, { Component } from "react";
import FeedbackOptions from "./Statistics/FeedbackOptions";
import Layout from "./Layout/Layout";
import Statistics from "./Statistics/Statistics";
import Section from "./Section";
import Notification from "./Notification";

interface stateTypes {
  good: number;
  neutral: number;
  bad: number;
}

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlePoints = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    (this.state.good * 100) / this.countTotalFeedback();

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Layout>
        <>
          <div>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handlePoints}
              />
            </Section>
          </div>

          <div>
            <Section title="Statistics">
              {total > 0 ? (
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={total}
                  positivePercentage={positiveFeedback}
                />
              ) : (
                <Notification message="No feedback given" />
              )}
            </Section>
          </div>
        </>
      </Layout>
    );
  }
}

export default App;
