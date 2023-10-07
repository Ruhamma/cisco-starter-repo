import React, { useEffect, useState } from "react";

function IpCollector({ ipType }) {
  const [ipAddress, setIpAddress] = useState();

  useEffect(() => {
    const getIpAddress = async () => {
      try {
        const response = await fetch(
          `https://api${ipType === "ipv6" ? "64" : ""}.ipify.org?format=json`
        );
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
        setIpAddress("Not detected");
      }
    };
    getIpAddress();
  }, [ipType]);
  return (
    <div>
      <div>
        <h3>Public {ipType === "ipv6" ? "IPv6" : "IPv4"} Address</h3>
        <p>{ipAddress}</p>
      </div>
    </div>
  );
}

export default IpCollector;
