"use client";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { useApollo } from "../apollo";

export default function Providers({ children }: { children: ReactNode }) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>{children}</ThemeProvider>
    </ApolloProvider>
  );
}
