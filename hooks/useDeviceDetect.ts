import React from "react";
import { useState, useEffect } from "./";

export function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false);
  const [userAgent, setUserAgent] = useState(null);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;

    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );

    setMobile(mobile);
    userAgent && setUserAgent(userAgent);
  }, []);

  return { isMobile, userAgent };
}
