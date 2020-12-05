import React from "react";
import PropTypes from "prop-types";

interface Props {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: Props) {
  return (
    <div className="statisticsPoints">
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>

      <div>Total: {total}</div>
      <div>Positive feedback: {good && positivePercentage.toFixed()}%</div>
    </div>
  );
}
