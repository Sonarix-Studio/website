"use client";

import Header from "@/components/Header/Header";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import LatestReleases from "@/components/LatestReleases/LatestReleases";
import CompanyServices from "@/components/CompanyServices/CompanyServices";
import Footer from "@/components/Footer/Footer";
import ContactUs from "@/components/ContactUs/page";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <LatestReleases />
        <CompanyServices />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
