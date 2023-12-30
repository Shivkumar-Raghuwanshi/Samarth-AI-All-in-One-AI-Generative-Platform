"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("96681885-09fc-4dd4-8072-d95aa71fd2d1");
  }, []);
  return null;
};
