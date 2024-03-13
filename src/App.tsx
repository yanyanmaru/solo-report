import { useEffect, useState } from "react";

import { Timer } from "./components/Timer.js";



function App() {
  const [isDisplay, setIsDisplay] = useState(false);

  function notification() {
    setIsDisplay(!isDisplay);
    switch (Notification.permission) {
      case "default":
        Notification.requestPermission();
        break;
      case "granted":
        new Notification("Code Tips", {
          // ここを追加
          body: "最新のニュースをお知らせします",
        });
        break;
      case "denied":
        alert("通知が拒否されています");
        break;
    }
  }


  return (
    <div>
      <button onClick={notification}>
        {isDisplay ? "終了" : "開始"}
      </button>
      {isDisplay && <Timer setIsDisplay={setIsDisplay} />}
    </div>
  );
}

export default App;
