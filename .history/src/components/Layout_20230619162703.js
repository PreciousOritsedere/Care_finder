import us from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Carefinder",
  description: "Find the latest health care centers around you",
};
