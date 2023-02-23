import React from 'react';
import SearchContainerLoadingFalse from './SearchContainerLoadingFalse';
import SearchContainerLoadingTrue from './SearchContainerLoadingTrue';

export default function SearchContainer({
  animeSearch,
  loading,
  title,
}: {
  animeSearch: any;
  loading: any;
  title: any;
}) {
  return (
    <section>
      <summary className="list-none mb-1 font-medium text-sm">{title}</summary>
      {loading ? (
        <SearchContainerLoadingTrue />
      ) : (
        <SearchContainerLoadingFalse animeSearch={animeSearch} title={title} />
      )}
    </section>
  );
}
