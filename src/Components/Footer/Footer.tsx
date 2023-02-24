import { CircleStackIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center pt-[2em] pb-[3em] bg-zinc-700 mt-20 px-24 gap-1">
      <Link
        href="/"
        className="font-medium text-xl hover:animate-pulse flex items-end"
      >
        Ani
        <span className="text-amber-600 text-2xl h-8 w-8">
          <CircleStackIcon />
        </span>
      </Link>
      <div className="flex flex-col gap-0.5">
        <p className="text-xs">
          Easy, fast and reliable database for all your needs
        </p>
        <p className="text-xs text-zinc-400">2023 AniBase</p>
      </div>
    </footer>
  );
}
