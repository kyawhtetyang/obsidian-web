import Link from "next/link";
import { SiteShell } from "./SiteShell";

type Feature = { icon: string; title: string; body: string };
type Price = { name: string; amount: string; note: string; features: string[]; featured?: boolean };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  features: Feature[];
  sectionTitle: string;
  sectionText: string;
  bandTitle: string;
  bandText: string;
  prices?: Price[];
  showPreview?: boolean;
};

export function MarketingPage(props: Props) {
  return (
    <SiteShell>
      <section className="hero container">
        <div className="eyebrow">{props.eyebrow}</div>
        <h1>{props.title}</h1>
        <p className="lede">{props.description}</p>
        <div className="actions">
          <Link className="btn primary" href={props.primary.href}>{props.primary.label}</Link>
          {props.secondary && <Link className="btn secondary" href={props.secondary.href}>{props.secondary.label}</Link>}
        </div>
      </section>

      {props.showPreview && (
        <section className="container preview" aria-label="Product interface preview">
          <div className="appframe">
            <aside className="sidebar">
              <div className="dotrow"><span className="dot"/><span className="dot"/><span className="dot"/></div>
              <div className="tree">
                <strong>Vault</strong><span>00 Inbox</span><span>Projects</span><span>Knowledge</span><span>Daily notes</span><span>Archive</span>
              </div>
            </aside>
            <div className="editor">
              <div className="crumb">Projects / Product thinking</div>
              <h2>Sharpen your thinking.</h2>
              <p>Connect notes, ideas, projects, and decisions in a space that stays yours. Build structure only when your thinking needs it.</p>
              <p>[[Private by default]] · [[Flexible workflows]] · [[Local files]]</p>
            </div>
          </div>
        </section>
      )}

      <section className="section container">
        <div className="section-head">
          <div className="eyebrow">Designed to stay flexible</div>
          <h2>{props.sectionTitle}</h2>
          <p>{props.sectionText}</p>
        </div>
        <div className="grid">
          {props.features.map((feature) => (
            <article className="card" key={feature.title}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      {props.prices && (
        <section className="section container">
          <div className="pricing">
            {props.prices.map((price) => (
              <article className={`price${price.featured ? " featured" : ""}`} key={price.name}>
                <div className="eyebrow">{price.name}</div>
                <div className="amount">{price.amount}</div>
                <p>{price.note}</p>
                <ul>{price.features.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="container band">
        <h2>{props.bandTitle}</h2>
        <p>{props.bandText}</p>
        <div className="actions" style={{ justifyContent: "flex-start" }}>
          <Link className="btn primary" href={props.primary.href}>{props.primary.label}</Link>
        </div>
      </section>
    </SiteShell>
  );
}
