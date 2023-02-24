import DisplayAnime from '@/Components/Index/DisplayAnime';
import React from 'react';
import Carousel from '../Components/Index/Carousel';

export default function index() {
  return (
    <section className="flex flex-col gap-8">
      <Carousel />
      <DisplayAnime />
    </section>
  );
}
