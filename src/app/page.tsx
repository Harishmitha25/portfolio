import { SiteShell } from "@/components/layout/site-shell";
import { skillGroups, techColorMap } from "@/lib/skills";
import { experience } from "@/lib/experience";
import { projects } from "@/lib/projects";

const skillColorClasses: Record<string, string> = {
  accent: "border-accent text-accent",
  teal: "border-teal text-teal",
  amber: "border-amber text-amber",
  rose: "border-rose text-rose",
  blue: "border-blue text-blue",
  purple: "border-purple text-purple",
  green: "border-green text-green",
  slate: "border-slate text-slate",
};
const dotColorClasses: Record<string, string> = {
  accent: "bg-accent",
  teal: "bg-teal",
  amber: "bg-amber",
  rose: "bg-rose",
  blue: "bg-blue",
  purple: "bg-purple",
  green: "bg-green",
  slate: "bg-slate",
};
const defaultTechClasses = "border-border text-foreground-secondary";

function TechPills({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((tech) => {
        const color = techColorMap[tech];
        const classes = color ? skillColorClasses[color] : defaultTechClasses;
        return (
          <span
            key={tech}
            className={`rounded-full border px-3 py-1 text-xs ${classes}`}
          >
            {tech}
          </span>
        );
      })}
    </div>
  );
}

export default function Home() {
  return (
    <SiteShell>
      <section id="about" className="scroll-mt-24 pt-8 pb-16 lg:pt-0 lg:pb-24">
        <h1 className="text-3xl font-medium text-foreground lg:text-4xl">
          Harishmitha Raja
        </h1>
        <p className="mt-2 text-foreground-secondary">Software Engineer</p>

        <p className="mt-8 text-lg font-medium text-accent lg:text-xl">
          I build interfaces that make complicated things feel simple.
        </p>
        <div className="mt-6 space-y-4 leading-relaxed text-foreground-secondary">
          <p>
            I&apos;m a software engineer who thinks about the person on the
            other side of the screen. I enjoy making complicated systems feel
            simple to use, keeping people in mind throughout the build, and
            getting the small details right. I care as much about how
            something feels to use as whether it technically works.
            That&apos;s what drew me towards front-end development, although
            I&apos;m equally comfortable reasoning through the backend logic
            behind it.
          </p>
          <p>
            Currently, I&apos;m a Front-End Developer at Costello Medical in
            Cambridge, building the interfaces behind a research platform
            used by teams across the business.
          </p>
          <p>
            Before that, I spent almost four years at Ford Motor Company in
            Chennai, starting as a Junior Software Engineer and working up to
            Software Engineer, with a promotion within nine months along the
            way.
          </p>
          <p>
            In between, I completed an MSc in Advanced Software Engineering
            at the University of Leicester with distinction, graduating with
            the Best Student Prize and Best Software Project Prize for a
            bug-tracking platform I built during the programme.
          </p>
          <p>
            Outside of work, I like pencil sketching, watching movies, and
            putting together Lego sets.
          </p>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Skills
        </h2>

        <div className="mt-8 space-y-6">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${dotColorClasses[group.color]}`}
                  aria-hidden="true"
                />
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

      <section id="experience" className="scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Experience
        </h2>

        <div className="mt-8 space-y-10">
          {experience.map((role) => (
            <div
              key={`${role.company}-${role.title}`}
              className="sm:grid sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <p className="text-sm text-muted">{role.dateRange}</p>
              <div className="mt-2 sm:mt-0">
                <h3 className="font-medium text-foreground">
                  {role.title}{" "}
                  <span className="text-foreground-secondary">
                    · {role.company}
                  </span>
                </h3>
                <p className="text-sm text-muted">{role.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                  {role.description}
                </p>
                <TechPills items={role.techStack} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Projects
        </h2>

        <div className="mt-8 space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-medium text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted">{project.subtitle}</p>
              {project.recognition && (
                <p className="mt-2 text-sm font-medium text-accent">
                  {project.recognition}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {project.description}
              </p>
              <TechPills items={project.techStack} />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                View repository ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-[50vh] scroll-mt-24 py-12">
        <h2 className="text-sm font-medium tracking-widest text-foreground-secondary uppercase">
          Contact
        </h2>
      </section>
    </SiteShell>
  );
}
