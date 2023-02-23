import React from 'react';

function Component() {
  return (
    <div className="flex flex-col gap-2 text-zinc-400 hover:text-orange-600 relative">
      <div className="rounded w-[12em] h-[17em] bg-zinc-700 animate-pulse"></div>
      <p className="w-[12em] h-2 bg-zinc-700 rounded-full animate-pulse"></p>
    </div>
  );
}

export default function DisplayQueryLoadinFalse() {
  return (
    <div>
      <section className="flex justify-center mt-4 ">
        <div className="flex justify-center w-[74em] flex-wrap gap-10 items-center">
          {[...Array(20)].map((x, index) => (
            <Component key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
