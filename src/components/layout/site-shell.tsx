"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "@/components/layout/social-links";
import { navItems } from "@/lib/nav-items";
import { useActiveSection } from "@/hooks/use-active-section";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {open ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <path d="M3 6h18M3 12h18M3 18h18" />
      )}
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const activeId = useActiveSection(sectionIds);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        aria-expanded={sidebarOpen}
        className="fixed top-6 left-6 z-50 hidden h-11 w-11 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:border-accent hover:text-accent lg:flex"
      >
        <HamburgerIcon />
      </button>

      <div className="fixed top-6 right-6 z-50 hidden lg:block">
        <ThemeToggle />
      </div>

      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur lg:hidden">
        <a href="#about" className="text-lg font-medium text-foreground">
          Harishmitha Raja
        </a>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground-secondary"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-12 bg-background lg:hidden">
          <nav>
            <ul className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="text-lg font-medium text-foreground-secondary transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </div>
      )}

      <div className="mx-auto max-w-[1400px] lg:flex">
        <aside
          className={`hidden overflow-hidden transition-[width] duration-300 ease-in-out lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-shrink-0 ${
            sidebarOpen ? "lg:w-[400px]" : "lg:w-0"
          }`}
        >
          <div className="flex h-full w-[400px] flex-col justify-between px-12 pt-24 pb-16">
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeId === id;
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`group flex items-center gap-3 text-sm font-medium tracking-widest uppercase transition-colors ${
                          isActive
                            ? "text-foreground"
                            : "text-foreground-secondary hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`h-px transition-all ${
                            isActive
                              ? "w-10 bg-accent"
                              : "w-5 bg-foreground-secondary group-hover:w-10 group-hover:bg-foreground"
                          }`}
                        />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <SocialLinks />
          </div>
        </aside>

        <main className="px-6 py-12 lg:flex-1 lg:pt-24 lg:pr-16 lg:pb-16 lg:pl-12">
          {children}
        </main>
      </div>
    </div>
  );
}
