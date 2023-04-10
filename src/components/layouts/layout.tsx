import Head from "next/head";
import Navbar from "../partials/navbar";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <main>{children}</main>
    </>
  );
}

Layout.defaultProps = {
  title: "Loomi",
};
