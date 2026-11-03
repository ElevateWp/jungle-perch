import React from 'react';
import Link from 'next/link';
import { TiltedGridHero } from '@/components/ui/tilted-grid-hero';

const TEAM_IMAGES = [
  { src: '/images/plumbing-technician.jpg', alt: 'Illustrative plumbing image' },
  { src: '/images/plumbing-repair.jpg', alt: 'Illustrative plumbing image' },
  { src: '/images/plumbing-pipes.jpg', alt: 'Illustrative plumbing image' },
  { src: '/images/plumbing-hot-water.jpg', alt: 'Illustrative plumbing image' },
];

export default function HomePlumbers() {
  return (
    <section className="relative z-20 w-full border-t border-mist bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-site px-6 md:px-12">
        <TiltedGridHero
          images={TEAM_IMAGES}
          speed={4}
          tileHeight={24}
          mobileTileHeight={18}
          gap={14}
          axis={48}
          curve={72}
          fade={13}
          className="h-[480px] w-full overflow-hidden rounded-2xl bg-paper md:h-[520px]"
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-paper via-paper/10 via-30% to-paper/85" />
          <div className="relative z-20 flex h-full flex-col items-center px-5 py-10 text-center md:py-14">
            <span className="font-body text-13 font-medium uppercase tracking-[0.18em] text-forest-ink/60">
              Plumbing service
            </span>
            <h2 className="mt-3 max-w-3xl font-display text-26 text-balance text-forest-ink md:text-41">
              Jungle Perch Plumbing Services
            </h2>
            <div className="mt-auto flex flex-col items-center pb-1">
              <p className="max-w-lg text-balance font-body text-15 leading-relaxed text-forest-ink/70">
                A customer praised the workmanship in their new home and the clear communication throughout.
              </p>
              <Link
                href="/team/"
                className="pointer-events-auto mt-6 inline-flex rounded-full bg-[#064B32] px-7 py-3 font-body text-15 font-semibold text-[#1C2119] shadow-lg shadow-[#1C2119]/20 transition-transform hover:-translate-y-0.5"
              >
                Discuss your plumbing <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </TiltedGridHero>
      </div>
    </section>
  );
}








