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
    <div className="leading-loose">
      <h3 className="font-bold text-lg ">
        {ipType === "ipv6" ? "IPv6" : "IPv4"} Address
      </h3>
      <p className="">{ipAddress}</p>
    </div>
  );
}

export default IpCollector;
