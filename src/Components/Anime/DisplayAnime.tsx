import React from 'react';
import APIData from './APIData';
import InfoTitle from './InfoTitle';

export default function DisplayAnime({ APIResponse }: { APIResponse: any }) {
  console.log(APIResponse);
  return (
    <div className="flex  flex-col items-center justify-center">
      <div
        className="h-[15em] w-screen bg-zinc-800 bg-cover bg-center"
        // style={{
        //   backgroundImage: `url(${APIResponse.images.webp.large_image_url})`,
        // }}
      ></div>
      <InfoTitle APIResponse={APIResponse} />
      <APIData APIResponse={APIResponse} />

      <div className="bg-red-500 w-[60em]">asdfs</div>
    </div>
  );
}
