import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  // Check if there are synonyms and render them
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    );
  } else {
    return null; // Return null if there are no synonyms
  }
}
