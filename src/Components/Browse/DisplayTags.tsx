import {
  Squares2X2Icon,
  TagIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/solid';
import React from 'react';

export default function DisplayTags({
  queryParameters,
}: {
  queryParameters: any;
}) {
  return (
    <section className="mt-4 flex justify-center">
      {queryParameters.length === 0 ? null : (
        <div className="flex justify-between items-center gap-5 w-[74em]">
          <div className="flex items-center gap-4">
            <TagIcon className="h-5 w-5 text-zinc-400" />
            <div className="flex items-center gap-3">
              {queryParameters.map((param: string, index: string) => (
                <div
                  key={index}
                  className="rounded-md py-0.5 px-2 text-xs bg-amber-600 text-zinc-200"
                >
                  {param}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-1">
            <Squares2X2Icon className="w-5 h-5 text-zinc-400 cursor-not-allowed hover:text-amber-600" />
            <ViewColumnsIcon className="w-5 h-5 text-zinc-400 cursor-not-allowed hover:text-amber-600" />
          </div>
        </div>
      )}
    </section>
  );
}
