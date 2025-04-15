"use client";

import { useState, useEffect } from "react";

export default function useModifierKey() {
  const [isModifierPressed, setIsModifierPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.metaKey || e.ctrlKey) {
        setIsModifierPressed(true);
      }
    };

    const handleKeyUp = (e: any) => {
      if (!e.metaKey && !e.ctrlKey) {
        setIsModifierPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return isModifierPressed;
}
