/* eslint-disable @next/next/no-img-element */

import { Carousel } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

export default function This() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const backgroundURL = [
    'https://i.imgur.com/4ilowmp.jpeg',
    'https://i.imgur.com/XVYW0gC.jpeg',
    'https://i.imgur.com/aWB3b4I.jpeg',
    'https://i.imgur.com/1hnXvhH.jpg',
  ];
  return (
    <div
      className="bg-zinc-700 flex justify-center pb-8 pt-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundURL[currentSlide]})` }}
    >
      <Carousel
        autoplay
        className="h-[30em] w-[70em] text-zinc-200"
        afterChange={(slide) => setCurrentSlide(slide)}
        effect="fade"
      >
        <div className="bg-carousel-1 bg-bottom bg-cover object-cover h-[30em] w-[70em] relative rounded-md">
          <Link
            href={`/anime/49387`}
            className="cursor-pointer hover:text-amber-500"
          >
            <div className=" absolute left-64 top-[11.5em] z-10">
              <summary className="text-2xl font-bold">
                Vinland Saga Season 2
              </summary>
              <p className="text-xs">ヴィンランド・サガ SEASON2</p>
            </div>
          </Link>
          <div className="absolute left-64 top-[17.5em] z-10 flex flex-col gap-3 ">
            <div className="flex justify-between mr-6">
              <p className="text-xl font-bold">Synopsis</p>
              <div className="flex gap-4 ">
                <p>
                  <span className="font-bold">Ranked:</span> #4165
                </p>
                <p>
                  <span className="font-bold">Popularity:</span> #3031
                </p>
                <p>
                  <span className="font-bold">Members:</span> #27,827
                </p>
              </div>
            </div>
            <p className="font-light text-sm mr-6 text-zinc-400">
              After his father&apos;s death and the destruction of his village
              at the hands of English raiders, Einar wishes for a peaceful life
              with his family on their newly rebuilt farms. However, fate has
              other plans: his village is invaded once again. Einar watches
              helplessly as the marauding Danes burn his lands and slaughter his
              family. The invaders capture Einar and take him back to Denmark as
              a slave.
            </p>
          </div>
          <Link href={`/anime/49387`} className="cursor-pointer">
            <img
              alt="Vinland Saga Season 2"
              src="https://i.imgur.com/ah7dCsr.jpeg"
              className="absolute z-10 rounded-lg h-[20em] left-7 top-28 drop-shadow-md"
            />
          </Link>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-[30em] opacity-50 rounded-md"></div>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-48 rounded-b-md"></div>
        </div>
        <div className="bg-carousel-2 bg-bottom bg-cover object-cover h-[30em] w-[70em] relative rounded-md">
          <Link
            href={`/anime/51105`}
            className="cursor-pointer hover:text-amber-500"
          >
            <div className=" absolute left-64 top-[11.5em] z-10">
              <summary className="text-2xl font-bold">
                NieR:Automata Ver1.1a
              </summary>
              <p className="text-xs">ニーア オートマタ</p>
            </div>
          </Link>
          <div className="absolute left-64 top-[17.5em] z-10 flex flex-col gap-3 ">
            <div className="flex justify-between  mr-6">
              <p className="text-xl font-bold">Synopsis</p>
              <div className="flex gap-4 ">
                <p>
                  <span className="font-bold">Ranked:</span> #3405
                </p>
                <p>
                  <span className="font-bold">Popularity:</span> #234
                </p>
                <p>
                  <span className="font-bold">Members:</span> #12,827
                </p>
              </div>
            </div>
            <p className="font-light text-sm mr-6 text-zinc-400">
              Earth is invaded by aliens and their Machine Lifeforms with
              humanity driven nearly to extinction; humans take refuge on the
              moon and build androids to retake Earth.
            </p>
          </div>
          <Link
            href={`/anime/51105`}
            className="cursor-pointer hover:text-amber-500"
          >
            <img
              alt="NieR:Automata Ver1.1a"
              src="https://i.imgur.com/dnvH7P1.jpeg"
              className="absolute z-10 rounded-lg h-[20em] left-7 top-28 drop-shadow-md"
            />
          </Link>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-[30em] opacity-50 rounded-md"></div>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-48 rounded-b-md"></div>
        </div>
        <div className="bg-carousel-3 bg-bottom bg-cover object-cover h-[30em] w-[70em] relative rounded-md">
          <Link
            href={`/anime/51958`}
            className="cursor-pointer hover:text-amber-500"
          >
            <div className=" absolute left-64 top-[11.5em] z-10">
              <summary className="text-2xl font-bold">
                Kono Subarashii Sekai ni Bakuen wo!
              </summary>
              <p className="text-xs">この素晴らしい世界に爆焔を！</p>
            </div>
          </Link>
          <div className="absolute left-64 top-[17.5em] z-10 flex flex-col gap-3 ">
            <div className="flex justify-between  mr-6">
              <p className="text-xl font-bold">Synopsis</p>
              <div className="flex gap-4 ">
                <p>
                  <span className="font-bold">Ranked:</span> #203
                </p>
                <p>
                  <span className="font-bold">Popularity:</span> #435
                </p>
                <p>
                  <span className="font-bold">Members:</span> #90,827
                </p>
              </div>
            </div>
            <p className="font-light text-sm mr-6 text-zinc-400">
              Crimson Magic Clan members Megumin and Yunyun are at the top of
              their class, but they still have a lot to learn. Yunyun&apos;s
              begun learning advanced magic, but Megumin has gone down a
              different path-the path of explosion magic! Despite being warned
              of its limited usefulness, Megumin believes explosion magic is the
              way for her to become a great, voluptuous wizard, and she
              won&apos;t be convinced otherwise!
            </p>
          </div>
          <Link
            href={`/anime/51958`}
            className="cursor-pointer hover:text-amber-500"
          >
            <img
              alt="Kono Subarashii Sekai ni Bakuen wo"
              src="https://i.imgur.com/3vGIhTh.jpeg"
              className="absolute z-10 rounded-lg h-[20em] left-7 top-28 drop-shadow-md"
            />
          </Link>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-[30em] opacity-50 rounded-md"></div>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-48 rounded-b-md"></div>
        </div>
        <div className="bg-carousel-4 bg-center bg-cover object-cover h-[30em] w-[70em] relative rounded-md">
          <Link
            href={`/anime/51535`}
            className="cursor-pointer hover:text-amber-500"
          >
            <div className=" absolute left-64 top-[11.5em] z-10">
              <summary className="text-2xl font-bold">
                Shingeki no Kyojin: The Final Season - Kanketsu-hen
              </summary>
              <p className="text-xs">進撃の巨人 The Final Season完結編 前編</p>
            </div>
          </Link>
          <div className="absolute left-64 top-[17.5em] z-10 flex flex-col gap-3 ">
            <div className="flex justify-between  mr-6">
              <p className="text-xl font-bold">Synopsis</p>
              <div className="flex gap-4 ">
                <p>
                  <span className="font-bold">Ranked:</span> #30
                </p>
                <p>
                  <span className="font-bold">Popularity:</span> #102
                </p>
                <p>
                  <span className="font-bold">Members:</span> #300,827
                </p>
              </div>
            </div>
            <p className="font-light text-sm mr-6 text-zinc-400">
              The war for Paradis zeroes in on Shiganshina just as Jaegerists
              have seized control. After taking a huge blow from a surprise
              attack led by Eren, Marley swiftly acts to return the favor. With
              Zeke&apos;s true plan revealed and a military forced under new
              rule, this battle might be fought on two fronts. Does Eren intend
              on fulfilling his half-brother&apos;s wishes or does he have a
              plan of his own?
            </p>
          </div>
          <Link
            href={`/anime/51535`}
            className="cursor-pointer hover:text-amber-500"
          >
            <img
              alt="Shingeki no Kyojin"
              src="https://i.imgur.com/Zp4dCMI.jpeg"
              className="absolute z-10 rounded-lg h-[20em] left-7 top-28 drop-shadow-md"
            />
          </Link>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-[30em] opacity-50 rounded-md"></div>
          <div className="absolute bg-zinc-800 bottom-0 w-[70em] h-48 rounded-b-md"></div>
        </div>
      </Carousel>
    </div>
  );
}
