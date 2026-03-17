"use client";

import { useState } from "react";

const INTEREST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSetqCFt8syvG-6AcDjwdk6On_mVQQ-3XadVAT9YoN_wl4xxmA/viewform?usp=send_form";

const LOCAL_STORAGE_KEY = "emergent-interest-form-2026-dismissed";

export function InterestFormPopup() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;

    try {
      const dismissed = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      return !dismissed;
    } catch {
      return true;
    }
  });

  const handleClose = () => {
    setOpen(false);
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close interest form prompt"
        >
          <span className="block h-5 w-5 text-xl leading-none">×</span>
        </button>

        <p className="font-bold uppercase tracking-widest text-blue-600">
          Emergent Conference 2026
        </p>

        <h2 className="text-2xl font-bold tracking-tight">
          Be the first to know when conference tickets drop
        </h2>

        <p className="text-sm text-gray-700">
          The 2026 conference is coming up on <span className="font-semibold">April 18th!</span>
        </p>

        <p className="text-sm text-gray-700">
          Fill out our interest form to get updates on registration, speakers,
          and the conference schedule.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Fill out interest form
          </a>
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

