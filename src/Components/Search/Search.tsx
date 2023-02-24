import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Jakan } from 'jakan';
import { useEffect, useState } from 'react';
import SearchContainer from './SearchContainer';

const jakan = new Jakan().withMemory().forSearch();

export default function Search({ setShowSearch }: { setShowSearch: any }) {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [animeSearch, setAnimeSearch] = useState<any[]>([]);
  const [charactersSearch, setCharactersSearch] = useState<any[]>([]);
  const [mangaSearch, setMangaSearch] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(() => {
      handleInputChange();
    }, 2000);

    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  function handleCloseSearch() {
    setShowSearch(false);
  }

  async function handleInputChange() {
    try {
      const responseAnime: any = await jakan.anime({
        q: searchInput,
        limit: 10,
      });
      const responseManga: any = await jakan.manga({
        q: searchInput,
        limit: 10,
      });
      const responseCharacters: any = await jakan.characters({
        q: searchInput,
        limit: 10,
      });
      setAnimeSearch(responseAnime.data);
      setMangaSearch(responseManga.data);
      setCharactersSearch(responseCharacters.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className="absolute bg-zinc-900 h-screen w-screen bg-opacity-80 z-30"
      onClick={handleCloseSearch}
    >
      <div className="flex flex-col gap-1 absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-400">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-4  h-12 rounded-lg px-4  bg-zinc-700"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
          <input
            value={searchInput}
            className="bg-transparent text-zinc-400 text-sm font-medium w-[35em] outline-none"
            placeholder="Search database"
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <XMarkIcon
            className="h-5 w-5 cursor-pointer"
            onClick={handleCloseSearch}
          />
        </div>
        <p className="self-end text-xs">
          Want more advanced searching? Try the browse page
        </p>
      </div>
      <div
        className="absolute flex gap-14 justify-center top-[30em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {animeSearch.length === 0 && !loading ? null : (
          <SearchContainer
            animeSearch={animeSearch}
            loading={loading}
            title={'Anime'}
          />
        )}
        {mangaSearch.length === 0 && !loading ? null : (
          <SearchContainer
            animeSearch={mangaSearch}
            loading={loading}
            title={'Manga'}
          />
        )}
        {charactersSearch.length === 0 && !loading ? null : (
          <SearchContainer
            animeSearch={charactersSearch}
            loading={loading}
            title={'Characters'}
          />
        )}
      </div>
    </div>
  );
}

//FIXME search for zenki/megumin
//TODO No Results
