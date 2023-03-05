import React, { useState } from "react";
import * as math from "mathjs";

const App = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const ClearDisplay =()=>{
    setResult(" ");
  }
  // const calculate=()=>{
  //   try{
  //     setResult(eval(result).toString());
  //   }catch(err){
  //     setResult("error")
  //   }
  // }
  const calculate=()=>{
    // const input = result.json("");
    setResult(math.evaluate(result));
  }
  return (
    <div className="main-div">
      <input type="text" placeholder="0" id="answer" value={result} />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="0"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="9"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="AC"
        className="button1"
        onClick={ClearDisplay}
      />
      <input
        type="button"
        value="="
        className="button1"
        onClick={calculate}
        
      />
    </div>
  );
};
export default App;
