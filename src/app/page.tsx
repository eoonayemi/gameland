import {
  BaseConceptSection,
  BattleSection,
  CallToActionSection,
  ContactAndOthersSection,
  FeaturesSection,
  Hero,
  NFTCollectionsSection,
  ThumbnailSection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <BaseConceptSection />
      <FeaturesSection />
      <BattleSection />
      <NFTCollectionsSection />
      <CallToActionSection />
      <ThumbnailSection />
      <ContactAndOthersSection />
    </main>
  );
}
