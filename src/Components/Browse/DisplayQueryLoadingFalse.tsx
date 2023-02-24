import { PlusCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

export default function DisplayQueryLoadingFalse({
  APIResponse,
}: {
  APIResponse: any;
}) {
  return (
    <section className="flex justify-center items-center mt-4 ">
      <div className="flex justify-center w-[80em] flex-wrap gap-5 items-center">
        {APIResponse.map((anime: any) => (
          <div
            key={anime.mal_id}
            className="flex flex-col gap-2 text-zinc-400 hover:text-zinc-200 cursor-pointer relative group"
          >
            <div className="absolute hidden top-5 left-[13em] h-[9em] w-[15em] bg-red-700 rounded z-10 group-hover:block cursor-none"></div>
            <PlusCircleIcon className="h-8 w-8 bottom-10 right-2 hidden absolute group-hover:block cursor-not-allowed z-50 text-zinc-200 animate-pulse" />
            <Image
              src={anime.images.webp.large_image_url}
              alt="anime"
              width={200}
              height={200}
              className="rounded w-[11em] h-[16em] object-cover transition-opacity drop-shadow-md"
            />
            <p className="w-[12em] truncate font-medium">{anime.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

//TODO additional information on hover - red box
