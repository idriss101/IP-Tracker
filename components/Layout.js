import React from "react";
import Head from "next/Head";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen container max-w-full">{children}</main>
    </div>
  );
}
