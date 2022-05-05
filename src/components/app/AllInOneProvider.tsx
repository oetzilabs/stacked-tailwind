import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { IconContext } from "phosphor-react";
import { PropsWithChildren } from "react";

export const AllInOnProvider = ({ pageProps, children }: PropsWithChildren<{ pageProps: AppProps["pageProps"] }>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <IconContext.Provider
          value={{
            size: 20,
          }}
        >
          {children}
        </IconContext.Provider>
      </ThemeProvider>
    </SessionProvider>
  );
};
