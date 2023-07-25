import TimeDiv from "./Components/TimeDiv";
import WrapperDiv from "./Components/WrapperDiv";
import WordsDiv from "./Components/WordsDiv";
import RestartButton from "./Components/RestartButton";
import ScoreDiv from "./Components/ScoreDiv";

function App() {
  return (
    <div className="App">

      <TimeDiv></TimeDiv>
      <WrapperDiv></WrapperDiv>
      <ScoreDiv></ScoreDiv>
      <RestartButton />
    </div>
  );
}

export default App;
