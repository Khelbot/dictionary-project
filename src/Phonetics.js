import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic) {
          return (
            <div>
              <span className="pronunciation">
                {phonetic.audio && (
                  <a href={phonetic.audio} target="_blank" rel="noreferrer">
                    Listen
                  </a>
                )}
              </span>
              <span className="text">{phonetic.text}</span>{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
