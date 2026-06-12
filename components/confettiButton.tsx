"use client";

import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import confetti from "canvas-confetti";

export default function ConfettiButton() {
  const fireConfetti = () => {
    const duration = 6 * 1000;
    const end = Date.now() + duration;

    addToast({
      title: "Info",
      description:
        "It will freeze if u click it enough times :)",
      color: "primary",
    });

    const colors = ["#FB2C36", "#FB2C36", "#05DF72", "#05DF72", "#155DFC","#155DFC"];

    (function frame() {
      confetti({
        particleCount: 100,
        angle: 600,
        spread: 700,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 100,
        angle: 1200,
        spread: 700,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <Button
      color="primary"
      radius="full"
      variant="shadow"
      onPress={fireConfetti}
    >
      Crash button
    </Button>
  );
}
