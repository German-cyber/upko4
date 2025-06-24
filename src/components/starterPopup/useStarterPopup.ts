// hooks/useStarterPopup.ts
import { useEffect, useState } from "react";

const TIMER_KEY = "starterPopupTimer";
const INITIAL_TIME = 605;

export const useStarterPopup = () => {
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_TIME);
  const [initialized, setInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showButtonDelay, setShowButtonDelay] = useState(false);

  useEffect(() => {
    const savedTime = localStorage.getItem(TIMER_KEY);
    const time = savedTime ? parseInt(savedTime, 10) : INITIAL_TIME;
    setTimeLeft(time);
    setInitialized(true);

    if (time > 0) {
      setTimeout(() => {
        setIsMounted(true);
        setIsVisible(true);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButtonDelay(true);
    }, 5000);
    return () => clearTimeout(buttonTimer);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    if (timeLeft <= 0) {
      setIsMounted(false);
      setIsVisible(false);
      localStorage.setItem(TIMER_KEY, "0");
      return;
    }

    localStorage.setItem(TIMER_KEY, timeLeft.toString());

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, initialized]);

  const handleClose = () => setIsVisible(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const showButton = timeLeft > 0 && !isVisible && showButtonDelay;

  return {
    timeLeft,
    isMounted,
    isVisible,
    setIsMounted,
    setIsVisible,
    handleClose,
    formatTime,
    showButton,
  };
};
