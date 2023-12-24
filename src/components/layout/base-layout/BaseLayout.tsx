import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/features";

export const BaseLayout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
