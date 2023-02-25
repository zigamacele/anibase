import Head from 'next/head';
import React from 'react';
import APIData from './APIData';
import Characters from './Characters';
import InfoTitle from './InfoTitle';
import Staff from './Staff';

export default function DisplayAnime({
  APIResponse,
  APIChar,
  APIStaff,
}: {
  APIResponse: any;
  APIChar: any;
  APIStaff: any;
}) {
  return (
    <div>
      <Head>
        <title>{APIResponse.title} - AniBase</title>
      </Head>
      <div className="flex  flex-col items-center justify-center">
        <div
          className="h-[15em] w-screen bg-zinc-800 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${APIResponse.images.webp.large_image_url})`,
          }}
        ></div>
        <InfoTitle APIResponse={APIResponse} />
        <div className="flex gap-8">
          <APIData APIResponse={APIResponse} />
          <div className="flex flex-col gap-4">
            <Characters APIChar={APIChar} />
            <Staff APIStaff={APIStaff} />
            {!APIResponse.trailer.embed_url ? null : (
              <div className="flex flex-col gap-3 mt-6">
                <p className="text-sm font-medium">Trailer</p>
                <iframe
                  width="652"
                  height="372"
                  src={APIResponse.trailer.embed_url + '&autoplay=0'}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Embedded Youtube Trailer"
                  className="rounded"
                />
              </div>
            )}
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
