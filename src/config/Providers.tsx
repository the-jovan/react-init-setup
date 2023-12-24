import { FunctionComponent, ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {},
});

const Providers: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <HelmetProvider>
      <Helmet>Where is this?</Helmet>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HelmetProvider>
  );
};

export default Providers;
