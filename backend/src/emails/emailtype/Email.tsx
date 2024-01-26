import { Container } from "@react-email/components";
import React from "react";
import MailWrapper from "../components/MailWrapper";
import Component from "../components/Component";

export default function Mangel() {
  return (
    <MailWrapper title={"Demo"}>
      <Container className="w-[800px] my-4 mx-auto font-sans">
        <Component />
      </Container>
    </MailWrapper>
  );
}
