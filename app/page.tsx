"use client";

import { useState } from "react";

const experiences = [
  { name: "Spa", full: "Spa Party", image: "/gallery-group.jpg", note: "Facials, manicures, makeup and hosted fun, brought to your location." },
  { name: "Slumber", full: "Slumber Party", image: "/gallery-portrait.jpg", note: "A cozy sleepover setup made for giggles, games and late night fun." },
  { name: "Picnic", full: "Picnic Party", image: "/hero.jpg", note: "A styled picnic celebration that turns your space into her party place." },
  { name: "Tea", full: "Tea Party", image: "/tea.jpg", note: "A dressed up afternoon with a table set for her favorite people." },
  { name: "Paint", full: "Paint + Create", image: "/paint.jpg", note: "A hands on party where every guest gets to make something fun." },
  { name: "BFF Glam", full: "BFF Glam", image: "/gallery-group.jpg", note: "A playful glam experience designed for best friends to enjoy together." },
];

const instagram = "https://www.instagram.com/pamperupretty/";

export default function Home() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = experiences[active];

  return (
    <main id="top">
      <div className="topline"><span>Atlanta, Georgia</span><span>Mobile party experiences for girls</span></div>
      <header className="nav-shell">
        <a className="wordmark" href="#top" aria-label="Pamper U Pretty home"><span>Pamper U</span><b>Pretty</b></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#parties" onClick={() => setMenuOpen(false)}>Parties</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#moments" onClick={() => setMenuOpen(false)}>Real moments</a>
        </nav>
        <a className="nav-cta" href={instagram} target="_blank" rel="noreferrer">Plan a party <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </header>

      <section className="campaign-hero">
        <div className="hero-heading">
          <h1><span>We bring</span><strong>the party</strong><span>to you.</span></h1>
        </div>
        <div className="hero-image-wrap">
          <img src="/hero.jpg" alt="Birthday guest at a Pamper U Pretty spa party" />
          <div className="image-tag"><span>01</span><p>Her big day.<br />Your easy day.</p></div>
        </div>
        <div className="hero-info">
          <p>Mobile spa parties, sleepovers, picnics and creative celebrations brought right to you.</p>
          <a className="arrow-link" href="#parties"><span>Explore the parties</span><b>↓</b></a>
        </div>
      </section>

      <div className="party-ticker" aria-hidden="true">
        <div>{[...experiences, ...experiences].map((item, i) => <span key={`${item.name}-${i}`}>{item.full} <b>✦</b></span>)}</div>
      </div>

      <section className="experience-section" id="parties">
        <div className="section-intro">
          <h2>One birthday.<br /><i>Six ways</i> to party.</h2>
          <p className="intro-note">Choose the vibe. Pamper U Pretty brings the setup, the activities and the energy.</p>
        </div>

        <div className="experience-tabs" role="tablist" aria-label="Party experiences">
          {experiences.map((item, index) => (
            <button key={item.name} type="button" role="tab" aria-selected={index === active} className={index === active ? "active" : ""} onClick={() => setActive(index)}>
              <small>0{index + 1}</small><span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="experience-stage" role="tabpanel" aria-live="polite">
          <div className="experience-photo"><img key={selected.image + active} src={selected.image} alt={`Real Pamper U Pretty ${selected.full} moment`} /></div>
          <div className="experience-copy">
            <span className="counter">0{active + 1} / 06</span>
            <h3>{selected.full}</h3>
            <p>{selected.note}</p>
            <a href={instagram} target="_blank" rel="noreferrer">Ask what&apos;s included <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="process-section" id="how">
        <div className="process-title"><h2>Pick the party.<br /><i>We handle</i> the rest.</h2></div>
        <div className="process-steps">
          <article><b>01</b><h3>Choose her experience</h3><p>Find the party that feels most like her.</p></article>
          <article><b>02</b><h3>We bring the fun</h3><p>Setup, activities and hosting come to you.</p></article>
          <article><b>03</b><h3>Enjoy the moment</h3><p>Take the photos. We&apos;ll keep the party moving.</p></article>
        </div>
      </section>

      <section className="moments-section" id="moments">
        <div className="moments-heading"><h2>This is what<br /><i>fun looks like.</i></h2><p>Actual celebrations by Pamper U Pretty in the Atlanta area.</p></div>
        <div className="photo-collage">
          <figure className="photo-a"><img src="/paint.jpg" alt="Girls showing their crafts at a Pamper U Pretty party" /><figcaption>Paint + create</figcaption></figure>
          <figure className="photo-b"><img src="/gallery-group.jpg" alt="Girls enjoying a Pamper U Pretty activity" /><figcaption>Hosted fun</figcaption></figure>
          <figure className="photo-c"><img src="/tea.jpg" alt="Girl at a Pamper U Pretty tea party" /><figcaption>Tea party</figcaption></figure>
        </div>
        <div className="review-placeholder"><span>Review space</span><p>A verified customer quote can be added here.</p><span>Coming next</span></div>
      </section>

      <section className="closing-section">
        <h2>Ready to make<br />her day <i>the day?</i></h2>
        <div className="closing-action"><p>Tell us the date, guest count and the party she loves.</p><a href={instagram} target="_blank" rel="noreferrer"><span>Start planning</span><b>↗</b></a></div>
      </section>

      <footer><a className="wordmark footer-mark" href="#top"><span>Pamper U</span><b>Pretty</b></a><p>Mobile parties · Atlanta, GA</p><div><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
