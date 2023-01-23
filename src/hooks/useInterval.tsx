import { useEffect } from "react";

export default function useInterval(func: () => void, time: number) {
  let interval: any;
  useEffect(() => {
    interval = setInterval(func, time);
    return () => clearInterval(interval);
  }, [func, time]);

  return interval;
}
