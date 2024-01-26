import { Body, Head, Html, Tailwind } from '@react-email/components';
import React, { ReactNode } from 'react';

type MailWrapperProps = { children: ReactNode; language?: string; title?: string };

export default function MailWrapper({ children, language = 'de', title }: MailWrapperProps) {
  return (
    <Html lang={language}>
      <Tailwind>
        <Head>{title && <title>{title}</title>}</Head>
        <Body className="bg-white">{children}</Body>
      </Tailwind>
    </Html>
  );
}
