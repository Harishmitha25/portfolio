import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6">
      <div className="fixed top-6 right-6">
        <ThemeToggle />
      </div>
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-medium text-foreground">
          Harishmitha Raja
        </h1>
        <p className="mt-1 text-foreground-secondary">Software Engineer</p>
        <a
          href="#"
          className="mt-6 inline-block rounded-md border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-white"
        >
          View projects
        </a>
      </div>
    </main>
  );
}
