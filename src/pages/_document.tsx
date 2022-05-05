import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

const ColorModeScript = () => {
  if (typeof window === "undefined") return null;
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return <></>;
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-[#08080C] ">
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
