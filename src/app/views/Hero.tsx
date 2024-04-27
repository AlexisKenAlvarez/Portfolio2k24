"use client";

import Container from "@/components/Container";
import Nav from "@/components/Nav";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      const tl = gsap.timeline({});

      tl.to(".marquee__part", {
        xPercent: -50,
        duration: 3,
        ease: "expo.out",
        delay: 1,
      });

      tl.to(".marquee__part", {
        xPercent: -100,
        duration: 60,
        repeat: -1,
        ease: "linear",
      });

      mm.add("(max-width: 800px)", () => {
        tl.from(
          ".marquee__part",
          {
            fontSize: "5rem",
          },
          "+=0.5",
        );

        tl.to(
          ".marquee__part",
          {
            fontSize: "8rem",
            duration: 1.5,
          },
          "-=62",
        );
      });

      mm.add("(min-width: 800px)", () => {
        tl.from(
          ".marquee__part",
          {
            fontSize: "12rem",
          },
          "+=0.5",
        );

        // this setup code only runs when viewport is at least 800px wide
        tl.to(
          ".marquee__part",
          {
            fontSize: "20rem",
            duration: 1.5,
          },
          "-=62",
        );
      });

      gsap.to(".marquee__inner", {
        autoAlpha: 1,
        duration: 1,
        delay: 1,
      });

      const tl2 = gsap.timeline({});

      tl2.to(".marquee__wrapper", {
        duration: 2,
        delay: 1,
        translateY: "50%",
      });

      tl2.to(
        containerRef.current,
        {
          autoAlpha: 1,
          duration: 1,
        },
        "-=1.5",
      );

      gsap.to(".my-image", {
        clipPath: "inset(0%)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.to(".to-left", {
        x: -250,
        opacity: 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.to(".to-right", {
        x: 250,
        opacity: 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: ref },
  );

  return (
    <Container
      className="flex min-h-screen flex-col items-center justify-center p-0"
      ref={ref}
    >
      <>
        <motion.div
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-20 m-auto h-fit w-fit"
        >
          <CgSpinnerTwoAlt className=" animate-spin text-4xl" />
        </motion.div>
        <div className="p-5 font-semibold opacity-0" ref={containerRef}>
          <Nav />
          <div className=" uppercase">
            <h3 className="to-left">hi there i&apos;m aki</h3>
            <div className="relative font-secondary text-5xl lg:text-7xl 2xl:text-8xl">
              <h1 className="relative font-black text-black">
                fullstack developer
              </h1>
              <h1 className="outlined absolute left-0 top-0 z-[2] font-bold text-transparent">
                fullstack developer
              </h1>
            </div>
            <h3 className="relative z-[2] ml-auto block w-fit to-right">based in ph</h3>
            <Image
              src="/profile.png"
              alt="Profile"
              width={1000}
              height={1000}
              className="my-image relative z-[1] mx-auto mt-4 w-[29rem] lg:-mt-40 2xl:-mt-44 2xl:w-[32rem] "
              style={{ clipPath: "inset(10%" }}
            />
          </div>
        </div>
        <div className="marquee__wrapper absolute -bottom-0 w-full overflow-x-hidden">
          <div
            className="marquee__inner flex w-full opacity-0"
            aria-hidden="true"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                className="marquee__part  shrink-0 px-2 text-[12rem] font-black"
                key={i}
              >
                ALEXIS KEN ALVAREZ
              </div>
            ))}
          </div>
        </div>
      </>
    </Container>
  );
};

export default Hero;
