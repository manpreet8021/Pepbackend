"use client";

import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Auth from "./auth";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Soulcation - Perfect place for retreat</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <main>
          <GoogleOAuthProvider clientId="641212104634-6fhlv4qgomtjubnss8vsh66uq6qh7i9l.apps.googleusercontent.com">
            <Provider store={store}>
              <Auth>
                {children}
              </Auth>
              <SrollTop />
            </Provider>
          </GoogleOAuthProvider>
        </main>
      </body>
    </html>
  );
}
