import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Work from "@/components/Work";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CtaBand from "@/components/CtaBand";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.work.eyebrow}
        title="Our finished work."
        sub="Recent installs and maintained properties across the Blue Water Area. The work is the portfolio, take a look."
      />
      <Work />
      {/* Config-gated before/after, renders only when Joe sends real pairs. */}
      <BeforeAfterSlider />
      <CtaBand />
    </>
  );
}
