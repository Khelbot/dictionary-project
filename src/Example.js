import React from "react";

export default function Example(props) {
  // Only check for the example
  if (props.example) {
    return (
      <div>
        <strong>Example:</strong> <em>{props.example}</em>
      </div>
    );
  } else {
    return null; // Return null if there is no example
  }
}
