import { useEffect, useState } from "react";

import { Timer } from "./components/Timer.js";


function App() {
  const [isDisplay, setIsDisplay] = useState(false);

  function toggleButton() {
    setIsDisplay(!isDisplay)
    
  }
  


  return (
    <div>
      <button onClick={toggleButton}>
        {isDisplay ? "終了" : "開始"}
      </button>
      {isDisplay && <Timer setIsDisplay={setIsDisplay} />}
    </div>
  );
}

export default App;
