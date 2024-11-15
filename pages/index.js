import Image from "next/image";
import { Inter } from "next/font/google";
import Header1 from "@/components/Header1";
import Head from "next/head";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer";
import Header4 from "@/components/Header4";
import Header3 from "@/components/Header3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>
          OYO : India`s Best Online Hotel Booking Site For Sanitized Stay.
          </title>
        </Head>
        <Header1/>
        <Header2/>
        <Header3/>
        <div className=" mx-20">
          <div className=" my-12 flex flex-wrap justify-center">
            <Image
              src={"/banner1.avif"}
              alt="banner1"
              width={200}
              height={200}
              className=" h-60 w-full"
            />
          </div>
          <div className=" flex flex-wrap justify-center mb-14">
            <Image
              src={"/banner2.avif"}
              alt="banner2"
              width={200}
              height={200}
              className=" h-40 w-full"
            />
          </div>
          <Header4/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
