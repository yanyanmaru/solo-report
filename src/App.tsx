import { useState } from "react";

import { Timer } from "./components/Timer.js";

function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  const handleToggleDisplay = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div>
      <button onClick={handleToggleDisplay}>
        {isDisplay ? "終了" : "開始"}
      </button>
      {isDisplay && <Timer setIsDisplay={setIsDisplay} />}
    </div>
  );
}

export default App;
