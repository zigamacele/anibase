import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Navigation({ setShowSearch }: { setShowSearch: any }) {
  return (
    <nav className="flex justify-between items-center px-20 py-5">
      <Link href="/" className="font-medium text-lg hover:animate-pulse">
        Ani<span className="text-amber-600 text-2xl">Base</span>
      </Link>
      <span className="flex gap-10">
        <button className="opacity-40 cursor-not-allowed">Anime</button>
        <button className="opacity-40 cursor-not-allowed">Manga</button>
        <Link
          href="/browse"
          className="hover:text-amber-600 hover:animate-pulse"
        >
          Browse
        </Link>
        <button className="opacity-40 cursor-not-allowed">Community</button>
      </span>
      <MagnifyingGlassIcon
        onClick={() => setShowSearch(true)}
        className="h-5 w-5 cursor-pointer hover:text-amber-600 hover:animate-pulse"
      />
    </nav>
  );
}
