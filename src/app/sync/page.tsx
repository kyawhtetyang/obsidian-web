import { MarketingPage } from "@/components/MarketingPage";

export default function SyncPage() {
  return <MarketingPage
    eyebrow="Sync"
    title="Keep your notes in step across every device."
    description="A focused synchronization page reconstructed from the supplied reference, emphasizing privacy, continuity, and recovery without changing the underlying note model."
    primary={{ label: "Explore Sync plans", href: "/pricing" }}
    secondary={{ label: "Download the app", href: "/download" }}
    sectionTitle="Synchronization should feel invisible."
    sectionText="The best sync layer gets out of the way: edits arrive quickly, history remains recoverable, and your working structure stays consistent."
    features={[
      { icon: "↻", title: "Fast continuity", body: "Move between desktop and mobile without rebuilding context or manually shuffling files." },
      { icon: "⌛", title: "Version recovery", body: "Retain a path back when a note changes unexpectedly or an earlier state becomes important." },
      { icon: "◇", title: "Private transport", body: "Treat synchronization as infrastructure around your notes rather than a replacement for ownership." },
    ]}
    bandTitle="Your workspace should follow you, not trap you."
    bandText="Keep one durable knowledge base while using a managed layer to coordinate copies across the devices where you actually work."
  />;
}
