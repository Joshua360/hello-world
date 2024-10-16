import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Helmet } from "react-helmet-async";

import { ContributorsSection } from "./sections/contributors";
import { FAQSection } from "./sections/faq";
import { FeaturesSection } from "./sections/features";
import { HeroSection } from "./sections/hero";
import { LogoCloudSection } from "./sections/logo-cloud";
import { StatisticsSection } from "./sections/statistics";
import { SupportSection } from "./sections/support";
import { TemplatesSection } from "./sections/templates";
import { TestimonialsSection } from "./sections/testimonials";

export const HomePage = () => {
  const { i18n } = useLingui();

  return (
    <main className="relative isolate bg-background">
      <Helmet prioritizeSeoTags>
        <html lang={i18n.locale} />

        <title>
          {t`Instant Resume`} - {t`Instantly Professional, Instantly Hired`}
        </title>

        <meta
          name="description"
          content="Create standout resumes with our expertly crafted templates designed for success."
        />
      </Helmet>

      <HeroSection />
      <LogoCloudSection />
      <StatisticsSection />
      {/* <FeaturesSection /> */}
      <TemplatesSection />
      {/* <TestimonialsSection /> */}
      {/* <SupportSection /> */}
      {/* <FAQSection /> */}
      {/* <ContributorsSection /> */}
    </main>
  );
};
