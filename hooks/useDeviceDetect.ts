import { useState, useEffect } from "react";

const useDeviceDetect = () => {
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
};

export default useDeviceDetect;
