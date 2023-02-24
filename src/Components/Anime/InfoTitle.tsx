import { ChevronDownIcon, HeartIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import React from 'react';

export default function InfoTitle({ APIResponse }: { APIResponse: any }) {
  return (
    <div className="relative flex justify-center bg-zinc-700 w-screen h-48">
      <div className="flex absolute top-[-11em] gap-6">
        <div className="flex flex-col gap-3">
          <Image
            src={APIResponse.images.webp.large_image_url}
            alt={APIResponse.title}
            width={200}
            height={200}
            className="rounded"
          />
          <div className="flex items-center justify-between cursor-not-allowed">
            <div className="flex items-center gap-6 bg-amber-500 py-1.5 px-2 rounded">
              <p className="pl-6 pr-1 text-zinc-100 text-sm">Add to List</p>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
            <HeartIcon className="h-8 w-8 bg-rose-500 text-zinc-100 p-2 rounded" />
          </div>
        </div>

        <div className=" flex flex-col justify-between gap-2">
          <div className="mt-[13em]">
            <p className="text-lg">{APIResponse.title}</p>
            <p className="text-sm text text-zinc-400  w-[50em] text-ellipsis h-[6em] overflow-hidden">
              {APIResponse.background}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
