import { noop } from "@utils";
import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";

// npm i react-countdown-hook
export const useCountdown = (
  timeToCount = 60 * 1000,
  interval = 1000,
  callbacks
) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const timer = useRef({});

  const { onEnding, onEnd } = callbacks || {};

  const run = (ts) => {
    if (!timer.current.started) {
      timer.current.started = ts;
      timer.current.lastInterval = ts;
    }

    const localInterval = Math.min(
      interval,
      timer.current.timeLeft || Infinity
    );
    if (ts - timer.current.lastInterval >= localInterval) {
      timer.current.lastInterval += localInterval;
      setTimeLeft((timeLeft) => {
        timer.current.timeLeft = timeLeft - localInterval;
        return timer.current.timeLeft;
      });
    }

    if (ts - timer.current.started < timer.current.timeToCount) {
      timer.current.requestId = window.requestAnimationFrame(run);
    } else {
      timer.current = {};
      setTimeLeft(0);
    }
  };

  const start = useCallback((ttc) => {
    window.cancelAnimationFrame(timer.current.requestId);

    const newTimeToCount = ttc !== undefined ? ttc : timeToCount;
    timer.current.started = null;
    timer.current.lastInterval = null;
    timer.current.timeToCount = newTimeToCount;
    timer.current.requestId = window.requestAnimationFrame(run);

    setTimeLeft(newTimeToCount);
  }, []);

  const pause = useCallback(() => {
    window.cancelAnimationFrame(timer.current.requestId);
    timer.current.started = null;
    timer.current.lastInterval = null;
    timer.current.timeToCount = timer.current.timeLeft;
  }, []);

  const resume = useCallback(() => {
    if (!timer.current.started && timer.current.timeLeft > 0) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current.requestId = window.requestAnimationFrame(run);
    }
  }, []);

  const reset = useCallback(() => {
    if (timer.current.timeLeft) {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current = {};
      setTimeLeft(0);
      onEnd?.();
    }
  }, []);

  const actions = useMemo(() => ({ start, pause, resume, reset }), []);

  useEffect(() => reset, []);

  useEffect(() => {
    if (timeLeft === 5000 && onEnding) onEnding();

    if (timeLeft === 1000 && onEnd) setTimeout(onEnd, 1000);
  }, [timeLeft]);

  return [timeLeft, actions];
};
