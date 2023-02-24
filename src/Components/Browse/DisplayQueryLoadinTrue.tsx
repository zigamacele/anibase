import { useEffect, useState } from 'react';

function Component() {
  return (
    <div className="flex flex-col gap-2 text-zinc-400 hover:text-orange-600 relative">
      <div className="rounded w-[11em] h-[16em] bg-zinc-700 animate-pulse"></div>
      <p className="w-[11em] h-2 bg-zinc-700 rounded-full animate-pulse"></p>
    </div>
  );
}

export default function DisplayQueryLoadinFalse({ index }: { index: any }) {
  const [numOfCopies, setNumOfCopies] = useState(24);
  useEffect(() => {
    if (index === 'index') setNumOfCopies(6);
  }, []);

  return (
    <div>
      <section className="flex justify-center mt-4 ">
        <div className="flex justify-center w-[80em] flex-wrap gap-8 items-center">
          {[...Array(numOfCopies)].map((x, index) => (
            <Component key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
