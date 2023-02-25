import Image from 'next/image';
import React from 'react';

export default function Staff({ APIStaff }: { APIStaff: any }) {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium">Staff</p>
      <div className="flex flex-wrap w-[62em] content-start">
        {APIStaff.map((staff: any, index: number) => {
          if (index < 6) {
            return (
              <div
                key={staff.person.name}
                className="mt-2 mr-4 cursor-not-allowed"
              >
                <div className="flex bg-zinc-700 rounded w-[19.1em]">
                  <div className="flex gap-2">
                    <Image
                      src={staff.person.images.jpg.image_url}
                      alt={staff.person.name}
                      width={100}
                      height={200}
                      className=" w-16 h-20 object-cover rounded-l"
                    />
                    <div className="text-xs flex flex-col justify-between my-2 text-zinc-400">
                      <p className="truncete h-12 overflow-hidden">
                        {staff.person.name}
                      </p>
                      <p>{staff.positions[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
