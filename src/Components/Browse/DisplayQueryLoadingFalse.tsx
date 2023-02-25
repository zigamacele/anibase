import { PlusCircleIcon, StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function firstLetterUppercase(string: string) {
  if (!string) return 'Unknown';
  const capitalizedWord = string.split('').map((letter, index) => {
    if (index === 0) return letter.toUpperCase();
    else return letter;
  });

  return capitalizedWord;
}

export default function DisplayQueryLoadingFalse({
  APIResponse,
}: {
  APIResponse: any;
}) {
  return (
    <section className="flex justify-center items-center mt-4 ">
      <div className="flex justify-center w-[80em] flex-wrap gap-8 items-center">
        {APIResponse.length === 0 ? (
          <div className="font-medium text-xl mt-8 text-zinc-300">
            No Results
          </div>
        ) : null}
        {APIResponse.map((anime: any) => (
          <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
            <div className="flex flex-col gap-2 text-zinc-400 hover:text-zinc-200 cursor-pointer relative group">
              <div className="absolute hidden top-5 left-[12em] h-[8em] w-[16em] bg-zinc-700 rounded z-10 group-hover:flex flex-col justify-between pointer-none p-4">
                <div className="flex justify-between items-center">
                  <p className="text-zinc-300 font-medium">
                    {firstLetterUppercase(anime.season)} {anime.year}
                  </p>
                  <div className="flex gap-1 items-center">
                    <StarIcon className="h-4 w-4 text-amber-500" />
                    <p>{anime.score || '?'}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 text-xs">
                  <p className="text-amber-500 font-medium">
                    {anime.studios[0] === undefined
                      ? 'Unknown'
                      : anime.studios[0].name}
                  </p>
                  <p>
                    {anime.type} • {anime.episodes || '?'} Episodes
                  </p>
                </div>
                <div className="flex gap-2">
                  {anime.genres.map((genre: any, index: any) => {
                    if (index < 3)
                      return (
                        <div
                          key={anime.mal_id + 'gen' + genre.mal_id}
                          className="rounded-md py-0.5 px-2 text-xs bg-amber-600 text-zinc-200 truncate"
                        >
                          {genre.name}
                        </div>
                      );
                  })}
                </div>
              </div>
              <PlusCircleIcon className="h-8 w-8 bottom-10 right-2 hidden absolute group-hover:block cursor-not-allowed z-50 text-zinc-200 animate-pulse" />
              <Image
                src={anime.images.webp.large_image_url}
                alt="anime"
                width={200}
                height={200}
                className="rounded w-[11em] h-[16em] object-cover transition-opacity drop-shadow-md"
              />
              <p className="w-[11em] truncate font-medium">{anime.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
