import { MarketingPage } from "@/components/MarketingPage";

export default function HomePage() {
  return <MarketingPage
    eyebrow="Private notes, open possibilities"
    title="A calm place for your ideas to grow."
    description="A dark, focused knowledge workspace reconstructed from the supplied Obsidian website references, with local-first thinking and flexible organization at its core."
    primary={{ label: "Download", href: "/download" }}
    secondary={{ label: "Explore plans", href: "/pricing" }}
    showPreview
    sectionTitle="Your notes should adapt to you."
    sectionText="Start simple, connect ideas as they become useful, and keep your information portable instead of locked inside a rigid workflow."
    features={[
      { icon: "↗", title: "Connected thinking", body: "Link related notes and let useful structure emerge naturally as your knowledge grows." },
      { icon: "⌁", title: "Local-first files", body: "Keep durable content in plain files you can organize, back up, move, and inspect yourself." },
      { icon: "✦", title: "Extensible workflows", body: "Shape the workspace around research, writing, projects, learning, or a personal operating system." },
    ]}
    bandTitle="Build a workspace that compounds with you."
    bandText="Use one adaptable foundation for thinking, project context, long-term knowledge, and publishing workflows."
  />;
}
