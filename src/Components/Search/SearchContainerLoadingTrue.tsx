import React from 'react';

function Component(): any {
  return (
    <div className="flex justify-between group hover:bg-amber-600 rounded  items-center text-zinc-300 hover:text-zinc-100 py-2 px-4 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="rounded w-10 h-10 bg-zinc-500"></div>
        <div className="flex flex-col font-medium text-sm">
          <div className="flex flex-col gap-2">
            <div className="w-48 h-2 bg-zinc-500 rounded-full"></div>
            <div className="w-36 h-2 bg-zinc-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="h-6 w-6 bg-zinc-500 rounded-full"></div>
    </div>
  );
}

export default function SearchContainerLoadingTrue() {
  return (
    <div className="flex flex-col bg-zinc-700 h-[37.3em] w-96 rounded">
      {[...Array(10)].map((x, index) => (
        <Component key={index} />
      ))}
      <div className="w-48 h-2 mt-2 bg-zinc-500 rounded-full self-center animate-pulse"></div>
    </div>
  );
}
