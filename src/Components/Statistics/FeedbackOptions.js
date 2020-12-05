import React from "react";

export default function FeedbackOptions({
  options = ["good", "neutral", "bad"],
  onLeaveFeedback,
}) {
  return (
    <div>
      {options.map((type) => (
        <button type="button" onClick={() => onLeaveFeedback(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}
