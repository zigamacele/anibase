import {
  ChevronDownIcon,
  CircleStackIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Navigation({ setShowSearch }: { setShowSearch: any }) {
  return (
    <nav className="flex justify-between items-center px-20 py-5 bg-zinc-700">
      <Link
        href="/"
        className="font-medium text-xl hover:animate-pulse flex items-end"
      >
        Ani
        <span className="text-amber-600 text-2xl h-8 w-8">
          <CircleStackIcon />
        </span>
      </Link>
      <span className="flex gap-10">
        <Link href="/" className="hover:text-amber-600 hover:animate-pulse">
          Home
        </Link>
        <button className="opacity-40 cursor-not-allowed">Anime</button>
        <button className="opacity-40 cursor-not-allowed">Manga</button>
        <Link
          href="/Browse"
          className="hover:text-amber-600 hover:animate-pulse"
        >
          Browse
        </Link>
        <button className="opacity-40 cursor-not-allowed">Community</button>
      </span>
      <div className="flex gap-6 items-center">
        <MagnifyingGlassIcon
          onClick={() => setShowSearch(true)}
          className="h-5 w-5 cursor-pointer hover:text-amber-600 hover:animate-pulse"
        />
        <div className="flex items-center cursor-not-allowed opacity-40">
          <UserIcon className="h-5 w-5" />
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
    </nav>
  );
}
