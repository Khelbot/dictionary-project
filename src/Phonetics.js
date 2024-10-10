export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              {" "}
              {phonetic.audio && (
                <a href={phonetic.audio} target="_blank" rel="noreferrer">
                  Listen
                </a>
              )}{" "}
              <br />
              {phonetic.text && <span>{phonetic.text}</span>}{" "}
              {/* Display phonetic text */}{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
