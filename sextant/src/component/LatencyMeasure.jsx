import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket(`ws://localhost:55455`);
function LatencyMeasure() {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    
    client.onopen = () => {
      console.log("connection established");
    };
    client.onmessage = (mess) => {
      const packetTime=mess.data;
      const currentTime =  Date.now();
      const latency = currentTime - packetTime;
      setLatency(latency);
    };
    client.onclose = () => {
      console.log("disconnected");
    };
    
  }, []);

  return (
    <div>
      <h2 className="font-bold text-lg ">Packet Latency</h2>
      <p>{latency ? `${latency}ms` : "Loading..."}</p>
    </div>
  );
}

export default LatencyMeasure;
