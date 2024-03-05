import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header"
import Feed from "@/components/Feed"

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title> Instagram 2 clone</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />

      {/* Modal */}
    </main>
  );
}
