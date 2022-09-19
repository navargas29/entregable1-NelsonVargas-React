import React from "react";

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {
  console.log(getRandomAll);

  const colorObj = {
    color: randomColor,
  };

  const backgroundObj = {
    backgroundColor: randomColor,
  };

  return (
    <article className="card" style={colorObj}>
      <p className="card_quote">
        {" "}
        <span>&#34;</span> {randomQuote.quote}{" "}
      </p>
      <h1 className="card_author">{randomQuote.author}</h1>
      <img className="photo_author" src={randomQuote.img} alt="" />
      <button className="card_btn" style={backgroundObj} onClick={getRandomAll}>
        {" "}
        Next{" "}
      </button>
    </article>
  );
};

export default QuoteBox;
