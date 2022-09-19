import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from "./json/quotes.json";
import color from "./utils/color";

function App() {
  // indice random
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);

  // extraccion de elemento segun indice random
  const firstQuote = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];

  const [randomQuote, setrandomQuote] = useState(firstQuote);
  const [randomColor, setrandomColor] = useState(firstColor);

  const backgroundObject = { backgroundColor: randomColor };

  //esta funcio calcula un quote y tambien color random
  const getRandomAll = () => {
    setrandomQuote(quotes[getIndexRandom(quotes)]);
    setrandomColor(color[getIndexRandom(color)]);
  };

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </div>
  );
}

export default App;
