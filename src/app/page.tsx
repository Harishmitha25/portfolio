import { SiteShell } from "@/components/layout/site-shell";
import { skillGroups } from "@/lib/skills";

export default function Home() {
  return (
    <SiteShell>
      <section id="about" className="scroll-mt-24 pt-8 pb-16 lg:pt-0 lg:pb-24">
        <h1 className="text-3xl font-medium text-foreground lg:text-4xl">
          Harishmitha Raja
        </h1>
        <p className="mt-2 text-foreground-secondary">Software Engineer</p>

        <p className="mt-8 text-lg font-medium text-accent lg:text-xl">
          &ldquo;I build interfaces that make complicated things feel
          simple.&rdquo;
        </p>
        <p className="mt-6 max-w-xl leading-relaxed text-foreground-secondary">
          Based in the UK, I build accessible, high-performance front-ends with
          React, Angular, and TypeScript from enterprise design systems at Ford
          Motor Company to research-platform workflows at Costello Medical
          today. Behind the UI, I build the APIs and services that power it too,
          with Node.js, Spring Boot, MongoDB, and MySQL, so I can own a feature
          end-to-end.
        </p>
      </section>

      <section id="skills" className="scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Skills
        </h2>

        <div className="mt-8 space-y-6">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-foreground">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="min-h-[50vh] scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Experience
        </h2>
      </section>

      <section id="projects" className="min-h-[50vh] scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Projects
        </h2>
      </section>

      <section id="contact" className="min-h-[50vh] scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Contact
        </h2>
      </section>
    </SiteShell>
  );
}
