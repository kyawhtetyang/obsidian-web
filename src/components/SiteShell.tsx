import Link from "next/link";

const nav = [
  ["Download", "/download"],
  ["Pricing", "/pricing"],
  ["Sync", "/sync"],
  ["Publish", "/publish"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <Link className="brand" href="/" aria-label="Home">
            <span className="gem" aria-hidden="true" />
            <span>Obsidian</span>
          </Link>
          <nav className="navlinks" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>
          <div className="navcta">
            <Link className="btn secondary" href="/pricing">Plans</Link>
            <Link className="btn primary" href="/download">Get the app</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container footer-row">
          <div className="brand"><span className="gem" aria-hidden="true" /><span>Obsidian Web Study</span></div>
          <div>Independent interface reconstruction for learning and prototyping.</div>
        </div>
      </footer>
    </>
  );
}
