import { PlusCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

export default function DisplayQueryLoadingFalse({
  APIResponse,
}: {
  APIResponse: any;
}) {
  return (
    <div>
      <section className="flex justify-center mt-4 ">
        <div className="flex justify-center w-[74em] flex-wrap gap-10 items-center">
          {APIResponse.map((anime: any) => (
            <div
              key={anime.mal_id}
              className="flex flex-col gap-2 text-zinc-400 hover:text-orange-600 cursor-pointer relative group"
            >
              <div className="absolute hidden  top-5 left-[13em] h-[9em] w-[15em] bg-red-700 rounded z-10 group-hover:block"></div>
              <PlusCircleIcon className="h-8 w-8 bottom-10 right-2 hidden absolute group-hover:block cursor-not-allowed z-50 text-zinc-200 animate-pulse" />
              <Image
                src={anime.images.webp.large_image_url}
                alt={anime.name}
                width={200}
                height={200}
                className="rounded w-[12em] h-[17em] object-cover transition-opacity"
              />
              <p className="w-[12em] truncate font-medium">{anime.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

//TODO additional information on hover
