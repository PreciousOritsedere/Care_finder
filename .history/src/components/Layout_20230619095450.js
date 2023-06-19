import React from "react";
import Head from "next/head";
import N

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Carefinder",
  description: "Find the latest health care centers around you",
};