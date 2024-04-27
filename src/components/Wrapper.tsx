/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Wrapper = ({ children }: { children: ReactNode }) => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  })
  useEffect(() => {
    let scroll: import("locomotive-scroll");
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default();
    });

    // cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return <div>{children}</div>;
};

export default Wrapper;
