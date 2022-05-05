import type { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { Logo } from "../components/app/Logo";
import { inferSSRProps } from "../utils/inferSSRProps";
import { trpc } from "../utils/trpc";

const Index: NextPage = (props: inferSSRProps<typeof getServerSideProps>) => {
  const { data, isLoading, error } = trpc.useQuery(["aboutmessage"]);
  return (
    <>
      <div className="flex w-full h-auto align-center justify-center py-20">
        <div className="flex flex-col gap-8">
          <Logo />
          <div className="flex flex-col gap-6">
            <span className="text-xl">Stacked.</span>
            {isLoading && (
              <div className="flex w-full h-full align-center justify-center">
                <div />
              </div>
            )}
            {!isLoading && !error && <span className="text-base">{data}</span>}
          </div>
          <Link passHref href="/">
            <a className="rounded-xl">Index Page</a>
          </Link>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return { props: {} };
};

export default Index;
