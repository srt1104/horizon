"use client";

import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: AnimatedCounterProps) {
  return <CountUp decimals={2} prefix="$" end={amount} />;
}
