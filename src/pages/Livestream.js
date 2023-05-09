import React, { useEffect } from "react";

function Livestream() {
  useEffect(() => {
    const ws = new WebSocket("ws://172.26.112.1:7890");

    ws.onopen = () => {
      ws.send("testing");
    };

    ws.onmessage = (event) => {
      console.log(event.data);
    };

    // The return function will be called when the component unmounts
    // This is a good place to clean up (close the WebSocket connection)
    return () => {
      ws.close();
    };
  }, []); // The empty array means this effect will only run once, when the component mounts

  return <div>First Class Robot footage</div>;
}

export default Livestream;
