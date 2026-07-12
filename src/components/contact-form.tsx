"use client";

import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-8 max-w-xl text-foreground-secondary">
        Thanks for reaching out. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-foreground-secondary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-foreground-secondary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-foreground-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-11 rounded-md border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-rose">
          Something went wrong. Try emailing me directly instead.
        </p>
      )}
    </form>
  );
}
