import { MarketingPage } from "@/components/MarketingPage";

export default function PublishPage() {
  return <MarketingPage
    eyebrow="Publish"
    title="Turn selected notes into a polished public site."
    description="A publishing page reconstructed from the supplied reference, centered on sharing a knowledge base, documentation, wiki, or digital garden without redesigning the source notes first."
    primary={{ label: "Explore Publish plans", href: "/pricing" }}
    secondary={{ label: "Back to home", href: "/" }}
    sectionTitle="Publish from the knowledge you already maintain."
    sectionText="Reduce the gap between private thinking and public communication by reusing the same connected structure instead of copying content into a separate CMS."
    features={[
      { icon: "◎", title: "Knowledge sites", body: "Shape linked notes into documentation, wikis, guides, or digital gardens." },
      { icon: "↗", title: "Simple sharing", body: "Expose only the material intended for readers while keeping the rest of the workspace private." },
      { icon: "Aa", title: "Readable by default", body: "Use a restrained visual system that keeps navigation and long-form reading clear." },
    ]}
    bandTitle="Write once, maintain one source, publish selectively."
    bandText="A useful publishing workflow keeps the authoring system and the public surface connected without making them the same thing."
  />;
}
