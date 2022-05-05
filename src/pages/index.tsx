import type { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import { Logo } from "../components/app/Logo";
import { inferSSRProps } from "../utils/inferSSRProps";
import { trpc } from "../utils/trpc";

const Index: NextPage = (props: inferSSRProps<typeof getServerSideProps>) => {
  const { data, isLoading, error } = trpc.useQuery(["hellomessage"]);
  return (
    <>
      <div className="flex w-full h-[600px] align-center justify-center">
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
          <Link passHref href="/about">
            <a className="rounded-xl">About Page</a>
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
