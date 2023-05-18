import Head from "next/head";

import { Layout } from "@/components/Layout";
import Hero from "@/components/Layout/Hero";
import Promo from "@/components/Layout/Promo";
import Banners from "@/components/Layout/Banners";
import NewArrivals from "@/components/Layout/NewArrivals";
import ModernBanner from "@/components/Layout/ModernBanner";
import BestSellers from "@/components/Layout/BestSellers";
import SocialBaner from "@/components/Layout/SocialBaner";
import BlogBaner from "@/components/Layout/BlogBaner";
import FullBanner from "@/components/Layout/FullBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>HONO - Multi Purpose HTML Template</title>
      </Head>
      <Hero />
      <Promo />
      <Banners />
      {/* <NewArrivals /> */}
      <ModernBanner />
      {/* <BestSellers /> */}
      {/* <BlogBaner /> */}
      <FullBanner />
      <SocialBaner />
    </>
  );
}
