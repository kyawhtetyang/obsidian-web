import { MarketingPage } from "@/components/MarketingPage";

export default function DownloadPage() {
  return <MarketingPage
    eyebrow="Download"
    title="Your notes, on every major platform."
    description="Use the same focused workspace across desktop and mobile while keeping a clear path to your own files and backups."
    primary={{ label: "Download for macOS", href: "#download" }}
    secondary={{ label: "View all platforms", href: "#platforms" }}
    sectionTitle="One workspace across your devices."
    sectionText="The reference page emphasizes broad platform availability. This reconstruction turns that into a clean, responsive download experience."
    features={[
      { icon: "M", title: "macOS", body: "Desktop experience for Apple silicon and modern Macs." },
      { icon: "W", title: "Windows & Linux", body: "Consistent desktop workflows across the major PC platforms." },
      { icon: "↕", title: "iOS & Android", body: "Capture, review, and edit notes from mobile devices." },
    ]}
    bandTitle="Take the same thinking environment everywhere."
    bandText="Desktop for deep work, mobile for capture, and a portable file model underneath both."
  />;
}
