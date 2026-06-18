import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhyUs from "@/components/WhyUs";
import ServiceArea from "@/components/ServiceArea";
import Reviews from "@/components/Reviews";
import CtaBand from "@/components/CtaBand";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.whyUs.eyebrow}
        title="Family-owned, and proud of it."
        sub="Over a decade of hardscaping and landscaping across the Blue Water Area — same family, same standards, same name on every job."
      />
      <WhyUs />
      <ServiceArea />
      <Reviews />
      <CtaBand />
    </>
  );
}
