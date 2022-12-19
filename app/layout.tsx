import Navbar from "./components/Navbar";

import Providers from "../helpers/providers";
import "../styles/main.scss";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <div id="main">
            <Navbar />
            {children}
            <Footer />
          </div>
          <div id="modal" />
        </Providers>
      </body>
    </html>
  );
}
