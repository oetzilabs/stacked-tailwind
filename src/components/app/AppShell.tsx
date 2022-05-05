import { PropsWithChildren } from "react";
import { PageFlow } from "./PageFlow";

export const AppShell = ({ children }: PropsWithChildren<{}>) => (
  <>
    <PageFlow />
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-col py-20">{children}</div>
    </div>
  </>
);
