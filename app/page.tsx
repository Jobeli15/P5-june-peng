"use client";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <span className={title({ color: "blue" })}>My Site&nbsp;</span>
      <div className="inline-block max-w-xl text-center justify-center">

      <span className={title({ color: "cyan" })}>On this semester&nbsp;</span>
        <br />
        <span className={title({})}>🎊&nbsp;</span>
        <span className={title({ color: "violet" })}>FINAL!&nbsp;</span>
        <span className={title({})}>🎊&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}>
          What ive learned through this semester 
        </div>

      </div>

      <div className="flex gap-3">
        <ConfettiButton />

        <div className={spinning ? "animate-spin" : ""}>
          <Button radius="full" variant="ghost" onPress={spinButton}>
            Spin
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            you can use the following<Code color="primary">Home, Docs, Pricing, Blog, About</Code>
          </span>
          <hr></hr>
          <a href="https://www.w3schools.com/">This website was super helpful CLICK ME!</a>
          <hr></hr>
          <ul>
            <li>This page</li>
            <li>Docs</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </Snippet>
      </div>
    </section>
  );
}
