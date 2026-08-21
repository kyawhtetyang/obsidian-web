import { MarketingPage } from "@/components/MarketingPage";

export default function PricingPage() {
  return <MarketingPage
    eyebrow="Pricing"
    title="Start free. Pay only for the services you need."
    description="A pricing layout inspired by the supplied reference: the core workspace remains separate from optional sync and publishing services."
    primary={{ label: "Get started", href: "/download" }}
    secondary={{ label: "See Sync", href: "/sync" }}
    sectionTitle="Choose the layer that solves your problem."
    sectionText="Keep the core experience simple, then add cross-device synchronization or publishing when those capabilities become valuable."
    features={[
      { icon: "0", title: "Core app", body: "A flexible knowledge workspace with no subscription required for the core local experience." },
      { icon: "↻", title: "Sync service", body: "Add managed synchronization when you want seamless continuity across devices." },
      { icon: "◎", title: "Publish service", body: "Turn selected knowledge into a clean public site when you are ready to share it." },
    ]}
    prices={[
      { name: "Core", amount: "$0", note: "For individual local-first work.", features: ["Local files", "Flexible linking", "Extensible workspace"] },
      { name: "Sync", amount: "$4+", note: "For multi-device continuity.", features: ["Cross-device sync", "Version history", "Private data transport"], featured: true },
      { name: "Publish", amount: "$8+", note: "For public knowledge sites.", features: ["Hosted publishing", "Custom site structure", "Simple sharing"] },
    ]}
    bandTitle="Keep ownership of your notes, add services selectively."
    bandText="The product boundary stays understandable: your knowledge is the base layer, optional services sit on top."
  />;
}
