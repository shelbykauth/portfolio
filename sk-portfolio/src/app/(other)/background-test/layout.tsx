import "../../globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full dark:scheme-dark">
      <head>
        <base href={process.env.PAGES_BASE_PATH + "/"} />
      </head>
      <body className="h-full w-full overflow-clip">
        <div className="h-full w-full relative">{children}</div>
      </body>
    </html>
  );
}
