import Image from 'next/image';
import React from 'react';

export default function Characters({ APIChar }: { APIChar: any }) {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium">Characters</p>
      <div className="flex flex-wrap w-[62em] content-start">
        {APIChar.map((character: any, index: number) => {
          if (index < 9 && character.voice_actors[0] !== undefined) {
            return (
              <div
                key={character.character.name}
                className="mt-2 mr-4 cursor-not-allowed"
              >
                <div className="flex bg-zinc-700 rounded">
                  <div className="flex gap-2">
                    <Image
                      src={character.character.images.webp.image_url}
                      alt={character.character.name}
                      width={100}
                      height={0}
                      className="w-16 object-cover rounded-l"
                    />
                    <div className="text-xs flex flex-col justify-between my-2 text-zinc-400">
                      <p className="truncete w-20 h-12 overflow-hidden">
                        {character.character.name}
                      </p>
                      <p>{character.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-xs flex flex-col justify-between my-2 text-zinc-400 text-right">
                      <p className="truncete text-clip w-20 h-10">
                        {character.voice_actors[0].person.name}
                      </p>
                      <p className="truncete w-20 overflow-hidden">
                        {character.voice_actors[0].language}
                      </p>
                    </div>

                    <Image
                      src={
                        character.voice_actors[0].person.images.jpg.image_url
                      }
                      alt={character.voice_actors[0].person.name}
                      width={100}
                      height={0}
                      className="w-16 object-cover rounded-r"
                    />
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
