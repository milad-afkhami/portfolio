import { useState, useEffect } from "react";

type UserAgent = typeof window.navigator.userAgent | null;

interface Platforms {
  desktop?: boolean;
  mobile?: boolean;
}
interface DeviceDetectHookProps {
  defaultValues?: Platforms;
}
interface DeviceDetectHookValue {
  isMobile: boolean;
  isDesktop: boolean;
  userAgent: UserAgent;
}

type DeviceDetectHook = (
  props?: DeviceDetectHookProps
) => DeviceDetectHookValue;

const useDeviceDetect: DeviceDetectHook = function (props) {
  const [isMobile, setIsMobile] = useState(
    props?.defaultValues?.mobile || false
  );
  const [isDesktop, setIsDesktop] = useState(
    props?.defaultValues?.desktop || false
  );
  const [userAgent, setUserAgent] = useState<UserAgent>(null);

  useEffect(() => {
    const isSSR = typeof window?.navigator === "undefined";
    const checkedUserAgent = isSSR ? null : navigator.userAgent;
    const mobileRegExp =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

    const _isMobile = Boolean(checkedUserAgent?.match(mobileRegExp));

    setIsMobile(_isMobile);
    setUserAgent(checkedUserAgent);
    setIsDesktop(!isSSR && !_isMobile);
  }, []);

  return { isMobile, isDesktop, userAgent };
};

export default useDeviceDetect;
