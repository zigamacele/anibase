import React from 'react';

function Component() {
  return (
    <div className="mt-2 mr-4">
      <div className="flex bg-zinc-700 rounded w-[19.1em] h-20 animate-pulse"></div>
    </div>
  );
}

export default function StaffTrue({ number }: { number: any }) {
  return (
    <div className="mt-4">
      <p className="h-2 rounded-full w-40 bg-zinc-700 animate-pulse"></p>
      <div className="flex flex-wrap w-[62em] content-start">
        {[...Array(number)].map((x, index) => (
          <Component key={index} />
        ))}
      </div>
    </div>
  );
}
