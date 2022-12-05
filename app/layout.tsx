"use client";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";

import { client } from "../apollo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <ApolloProvider client={client}>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
