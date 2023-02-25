import React from 'react';

export default function InfoTitleTrue() {
  return (
    <div className="relative flex justify-center bg-zinc-700 w-screen h-48">
      <div className="flex absolute top-[-11em] gap-6">
        <div className="flex flex-col gap-3">
          <div className="w-[13.5em] h-[19em] bg-zinc-800 rounded animate-pulse"></div>
          <div className="flex items-center justify-between cursor-not-allowed">
            <div className="flex items-center gap-6 bg-zinc-800 py-1.5 px-2 rounded animate-pulse">
              <p className="pl-6 pr-1 h-5 w-36"></p>
            </div>
            <div className="h-8 w-8  bg-zinc-800 p-2 rounded animate-pulse"></div>
          </div>
        </div>

        <div className=" flex flex-col justify-between gap-2">
          <div className="mt-[15em] flex flex-col gap-2">
            <p className="text-lg h-3 rounded w-48 bg-zinc-800 animate-pulse"></p>
            <p className="text-sm text bg-zinc-800  w-[50em] text-ellipsis h-[6em] overflow-hidden rounded animate-pulse"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
