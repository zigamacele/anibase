import { PlusCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SearchContainerLoadingFalse({
  animeSearch,
  title,
}: {
  animeSearch: any;
  title: any;
}) {
  return (
    <div className="flex flex-col bg-zinc-700 w-96 rounded">
      {animeSearch.map((anime: any) => {
        return (
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
            <div
              key={anime.mal_id}
              className="flex justify-between group hover:bg-amber-600 rounded items-center text-zinc-300 hover:text-zinc-100 py-2 px-4"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={anime.images.webp.image_url}
                  alt={anime.mal_id}
                  width={100}
                  height={100}
                  className="rounded w-10 h-10 object-cover"
                />
                <div className="flex flex-col font-medium text-sm w-60">
                  <p className="truncate text-ellipsis">
                    {anime.title || anime.name}
                  </p>
                  <div className="flex gap-1 font-light">
                    <p>{anime.year || anime.name_kanji}</p>
                    <p>{anime.type}</p>
                  </div>
                </div>
              </div>
              <PlusCircleIcon className="h-6 w-6 hidden group-hover:block cursor-not-allowed" />
            </div>
          </Link>
        );
      })}
      <Link href="/Browse">
        <button className="self-center pt-2 pb-3 px-4 text-zinc-300 hover:text-zinc-100 hover:bg-amber-600 rounded-br rounded-bl w-96 text-xs font-light">
          View all {title === 'Characters' ? 'character' : title.toLowerCase()}{' '}
          results
        </button>
      </Link>
    </div>
  );
}

//TODO on anime click go to :slug
//TODO close search on click
