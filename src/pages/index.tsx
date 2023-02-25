import DisplayAnime from '@/Components/Index/DisplayAnime';
import Head from 'next/head';
import React from 'react';
import Carousel from '../Components/Index/Carousel';

export default function index() {
  return (
    <div>
      <Head>
        <title>AniBase</title>
      </Head>
      <section className="flex flex-col gap-8">
        <Carousel />
        <DisplayAnime />
      </section>
    </div>
  );
}
