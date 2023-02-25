import React from 'react';
import { firstLetterUppercase } from '../Browse/DisplayQueryLoadingFalse';

export default function APIData({ APIResponse }: { APIResponse: any }) {
  return (
    <div className="flex flex-col w-[14em] py-3 px-4 mt-4 bg-zinc-700 rounded gap-3">
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Format</p>
        <p className="text-zinc-400">{APIResponse.type}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Episodes</p>
        <p className="text-zinc-400">{APIResponse.episodes}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Duration</p>
        <p className="text-zinc-400">{APIResponse.duration}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Status</p>
        <p className="text-zinc-400">{APIResponse.status}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Season</p>
        <p className="text-zinc-400">
          {firstLetterUppercase(APIResponse.season) || 'Unknown'}
        </p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Year</p>
        <p className="text-zinc-400">{APIResponse.year || 'Unknown'}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Source</p>
        <p className="text-zinc-400">{APIResponse.source}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Score</p>
        <p className="text-zinc-400">{APIResponse.score}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Scored By</p>
        <p className="text-zinc-400">{APIResponse.scored_by}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Members</p>
        <p className="text-zinc-400">{APIResponse.members}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Rank</p>
        <p className="text-zinc-400">{APIResponse.rank}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Popularity</p>
        <p className="text-zinc-400">{APIResponse.popularity}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Studio</p>
        {APIResponse.studios.map((studio: any) => (
          <p key={studio.name + '-studio'} className="text-zinc-400">
            {studio.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Producers</p>
        {APIResponse.producers.map((studio: any) => (
          <p key={studio.name + '-producer'} className="text-zinc-400">
            {studio.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Licensors</p>
        {APIResponse.licensors.map((studio: any) => (
          <p key={studio.name + '-licensors'} className="text-zinc-400">
            {studio.name}
          </p>
        ))}
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Rating</p>
        <p className="text-zinc-400">{APIResponse.rating}</p>
      </div>
      <div className="flex flex-col text-xs gap-1">
        <p className="font-medium text-sm">Favorites</p>
        <p className="text-zinc-400">{APIResponse.favorites}</p>
      </div>
      <div className="flex flex-col text-xs gap-2">
        {APIResponse.titles.map((studio: any, index: number) => (
          <div
            key={studio.title + index + '-title'}
            className="flex flex-col gap-1"
          >
            <p className="font-medium text-sm">{studio.type}</p>
            <p className="text-zinc-400">{studio.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
