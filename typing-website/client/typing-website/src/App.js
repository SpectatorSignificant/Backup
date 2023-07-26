import TimeDiv from "./Components/TimeDiv";
// import WrapperDiv from "./Components/WrapperDiv";
import WordsDiv from "./Components/WordsDiv";
import RestartButton from "./Components/RestartButton";
import ScoreDiv from "./Components/ScoreDiv";
import "./style.css"
import { generate } from "random-words";

// charArray = ['h'];

let randomWords = generate({exactly: 2})

function App() {
  return (
    <div className="App">

      <TimeDiv></TimeDiv>
      <WordsDiv originalString={randomWords.join(" ")}></WordsDiv>
      {/* <WrapperDiv></WrapperDiv> */}
      <ScoreDiv></ScoreDiv>
      <RestartButton />
    </div>
  );
}

export default App;
