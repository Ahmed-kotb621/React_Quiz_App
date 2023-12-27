export default function Questions({ question, dispatch, answer, points }) {
  const hasAnswared = answer !== null;
  return (
    <div>
      <Score />
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswared
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswared}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function Score() {
  return (
    <div>
      <p>0</p>
    </div>
  );
}
