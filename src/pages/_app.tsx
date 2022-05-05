/* eslint-disable @next/next/no-img-element */
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import { withTRPC } from "@trpc/next";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import superjson from "superjson";
import { AllInOnProvider } from "../components/app/AllInOneProvider";
import { AppShell } from "../components/app/AppShell";
import type { AppRouter } from "../server/routers/_app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StrictMode>
      <DefaultSeo />
      <AllInOnProvider pageProps={pageProps}>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </AllInOnProvider>
    </StrictMode>
  );
};
// also export a reusable function getServerSideProps
export function getServerSideProps({ req }: GetServerSidePropsContext) {
  const session = getSession({ req });
  return {
    props: {
      cookies: req.headers.cookie ?? "",
      session,
    },
  };
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    if (typeof window !== "undefined") {
      // during client requests
      return {
        url: "/api/trpc",
        transformer: superjson,
      };
    }
    const ONE_DAY_SECONDS = 60 * 60 * 24;
    ctx?.res?.setHeader("Cache-Control", `s-maxage=1, stale-while-revalidate=${ONE_DAY_SECONDS}`);

    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      headers: {
        "x-ssr": "1",
      },
      transformer: superjson,
    };
  },
  ssr: true,
})(MyApp);
