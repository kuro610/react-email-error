import { Section } from "@react-email/components";
import React from "react";
import { demoFunc } from "../../services/demo";

export default function Component() {
  return (
    <Section className="p-2.5 w-full max-w-[300px] mb-2.5 rounded-2xl bg-stone-300">
      {demoFunc()}
    </Section>
  );
}
