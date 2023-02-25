import APIDataTrue from './APIDataTrue';
import InfoTitleTrue from './InfoTitleTrue';
import StaffTrue from './StaffTrue';

export default function DisplayAnimeLoadingTrue() {
  return (
    <div className="flex  flex-col items-center justify-center">
      <div className="h-[15em] w-screen bg-zinc-900 bg-cover bg-center opacity-40"></div>
      <InfoTitleTrue />
      <div className="flex gap-8">
        <APIDataTrue />
        <div className="flex flex-col gap-4">
          <StaffTrue number={12} />
          <StaffTrue number={6} />
          <div className="mt-6 flex flex-col gap-2">
            <div className="w-40 h-2 rounded-full bg-zinc-700 animate-pulse"></div>
            <div className="w-[30em] h-96 bg-zinc-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
