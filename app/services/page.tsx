import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import CtaBand from "@/components/CtaBand";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("services");

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.servicesIntro.eyebrow}
        title="Hardscaping, lawn care & landscaping."
        sub="One family crew for the whole property — from a single paver patio to year-round maintenance. Everything we do across the Blue Water Area."
      />
      <Services />
      <ServiceArea />
      <CtaBand />
    </>
  );
}
