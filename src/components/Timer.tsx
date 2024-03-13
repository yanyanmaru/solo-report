import { useEffect, useState } from "react";

export const Timer: React.FC<{
    setIsDisplay: (value: React.SetStateAction<boolean>) => void;

  }> = ({ setIsDisplay }) => {
    const [count, setCount] = useState(5);
    

    useEffect(() => {
      console.log("再レンダー");
      if (count < 0) {
        setIsDisplay(false);
        switch (Notification.permission) {
            case "default":
              Notification.requestPermission();
              break;
            case "granted":
                new Audio("./wav.mp3").play();
              new Notification("30分経ちました！", {
                // ここを追加
                body: "振り返りましょう！",

              });
              break;
            case "denied":
              alert("通知が拒否されています");
              break;
          }
        return;
      }
  
      const doInterval = setInterval(() => {
        setCount((prev) => prev - 1);
        console.log(count)
      }, 1000);
  
      return () => {
        console.log("前回のintervalをクリーンアップします");
        clearInterval(doInterval);
      };
    }, [count, setIsDisplay]);
  
    return (
        <>
      <p>{count}</p>
      {count<1 && <p>じゃんけん</p>}
      </>
    );
  };
  