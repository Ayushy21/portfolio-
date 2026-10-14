"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Asterisk, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { useActiveSection } from "@/lib/hooks";

const links = [
  { href: "#work", label: "Selected work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];
const sections = [
  "top",
  "work",
  "experience",
  "engineering",
  "about",
  "contact",
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const active = useActiveSection(sections);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (media.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <nav className="container nav-inner" aria-label="Primary navigation">
        <a
          href="#top"
          className="wordmark"
          aria-label="Ayush Yadav home"
          onClick={() => setOpen(false)}
        >
          <Asterisk aria-hidden="true" className="brand-mark" /> ayush
          <span>.</span>
        </a>
        <div className="desktop-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={`#${active}` === link.href ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-contact">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav container"
          aria-label="Mobile navigation"
        >
          {links.map((link, index) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <span className="mono">0{index + 1}</span>
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            <span className="mono">04</span>Let’s talk
            <ArrowUpRight size={18} />
          </a>
          <a href={site.resume} download>
            Download resume <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
