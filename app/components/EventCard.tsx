"use client";

import Image, { type StaticImageData } from "next/image";
import { type ReactNode, useEffect, useState } from "react";

type Logo = {
  name: string;
  src: string;
};

export interface EventCardProps {
  title: string;
  date: string;
  description: ReactNode;
  images: StaticImageData[];
  speakers: Logo[];
  sponsors: Logo[];
  featuredEvent: boolean;
}

export function EventCard({
  title,
  date,
  description,
  images,
  speakers,
  sponsors,
  featuredEvent,
}: EventCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [hasUserInteractedWithCarousel, setHasUserInteractedWithCarousel] =
    useState(false);

  const [carouselInteractionKey, setCarouselInteractionKey] = useState(0);

  // Automatically rotate images every 5 seconds while expanded,
  // until the user manually interacts with the carousel controls.
  useEffect(() => {
    if (!expanded || images.length <= 1 || hasUserInteractedWithCarousel) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [expanded, images.length, hasUserInteractedWithCarousel]);

  // If the user has interacted with the carousel, pause auto-rotation.
  // Resume it after 10s of no interaction.
  useEffect(() => {
    if (!hasUserInteractedWithCarousel) {
      return;
    }

    const timeout = setTimeout(() => {
      // Only resume auto-rotation if the card is still open.
      if (expanded) {
        setHasUserInteractedWithCarousel(false);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [expanded, hasUserInteractedWithCarousel, carouselInteractionKey]);

  return (
    <div
      className={`relative mt-2 rounded-sm bg-gray-100 overflow-hidden transition-all duration-300 border-2 ${
        expanded || !featuredEvent
          ? "border-gray-600 shadow-none"
          : "border-emergent-pink shadow-[0_10px_30px_rgba(255,122,193,0.4)] cursor-pointer"
      }`}
      onClick={
        !expanded
          ? () => {
              setExpanded(true);
            }
          : undefined
      }
      role={expanded ? undefined : "button"}
      aria-expanded={expanded}
    >
      {/* Header: title and date */}
      <div
        className={`px-4 pt-4 ${expanded ? "cursor-pointer" : ""}`}
        onClick={
          expanded
            ? (e) => {
                e.stopPropagation();
                setExpanded(false);
              }
            : undefined
        }
      >
        <h2 className="text-xl font-semibold tracking-tight mb-0">{title}</h2>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Collapsed summary: smaller image and condensed description */}
      <div
        className={`relative transition-all duration-300 ease-in-out overflow-hidden ${
          expanded
            ? "max-h-0 opacity-0 translate-y-2 pointer-events-none"
            : "max-h-64 opacity-100 translate-y-0"
        }`}
      >
        <div className="flex flex-row items-start gap-4 px-4 pb-4 pt-2">
          <div className="w-20 sm:w-24 mt-1 shrink-0 flex flex-col gap-2">
            <div className="h-20 sm:h-24 overflow-hidden rounded-sm">
              <div className="relative w-full h-full">
                <Image
                  src={images[0]}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* small second image on mobile */}
            <div className="h-20 sm:hidden overflow-hidden rounded-sm">
              <div className="relative w-full h-full">
                <Image
                  src={images[1]}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            {(speakers.length > 0 || sponsors.length > 0) && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs text-gray-500">
                <span className="uppercase tracking-wide">Speakers from</span>
                <div className="flex flex-wrap items-center gap-2">
                  {speakers.slice(0, 3).map((logo) => (
                    <div
                      key={`collapsed-${logo.name}`}
                      className="h-5 flex items-center"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={80}
                        height={20}
                        className="h-5 w-auto object-contain opacity-80"
                      />
                    </div>
                  ))}
                </div>
                {speakers.length > 3 && (
                  <span className="text-[11px] text-gray-400">+ more</span>
                )}
              </div>
            )}

            <div className="relative text-sm overflow-hidden max-h-24">
              {description}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-gray-100 via-gray-100/80 to-transparent" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
          <span className="text-xs uppercase tracking-wide bg-white/80 px-3 py-1 rounded-full border border-emergent-pink/40">
            Click to expand
          </span>
        </div>
      </div>

      {/* Expanded content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          // TODO: avoid magic number (2000px) while keeping animation stable/avoiding content slam on collapse
          expanded
            ? "max-h-[2000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Expanded image carousel, directly under title/date */}
        <div className="w-full sm:w-1/2 max-w-xl mx-auto mt-4 px-4 sm:px-0">
          <div className="relative w-full h-0 pb-[66%] overflow-hidden rounded-sm">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image src={image} alt={title} fill className="object-cover" />
              </div>
            ))}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHasUserInteractedWithCarousel(true);
                    setCarouselInteractionKey((prev) => prev + 1);
                    setCurrentImageIndex((prev) =>
                      prev === 0 ? images.length - 1 : prev - 1
                    );
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHasUserInteractedWithCarousel(true);
                    setCarouselInteractionKey((prev) => prev + 1);
                    setCurrentImageIndex((prev) =>
                      prev === images.length - 1 ? 0 : prev + 1
                    );
                  }}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>

        {/* Expanded content: full description, speakers, sponsors */}
        <div className="px-4 pt-4 pb-6 space-y-2">
          {description}

          <div className="mt-4 space-y-2">
            {/* Speakers */}
            <h3 className="text-lg font-semibold">Featured speakers from...</h3>
            <div className="border-l-3 border-gray-700 ml-0.5 pl-4 mb-6 grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-4 items-center">
              {speakers.map((logo) => (
                <div key={logo.name} className="flex justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={80}
                    className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Sponsors */}
            <h3 className="text-lg font-semibold">Featured sponsors...</h3>
            <div className="border-l-3 border-gray-700 ml-0.5 pl-4 mb-6 grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-4 items-center">
              {sponsors.map((logo) => (
                <div key={logo.name} className="flex justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={80}
                    className="h-6 sm:h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-4 w-full flex justify-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
          >
            <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-emergent-pink text-emergent-pink bg-white/80 hover:bg-emergent-pink/10 transition-colors">
              Click to collapse
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
