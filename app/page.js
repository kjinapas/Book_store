"use client";

import BookStore from "./component/BookStore";
import Footer from "./component/Footer";

import Navbar from "./component/NavbarUi";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Navbar />
        <BookStore />

        <Footer />
      </NextUIProvider>
    </>
  );
}
