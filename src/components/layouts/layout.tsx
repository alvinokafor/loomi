import Head from "next/head";

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

      <main>{children}</main>
    </>
  );
}

Layout.defaultProps = {
  title: "Loomi",
};
