import { Jakan } from 'jakan';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DisplayQuery from '../Browse/DisplayQuery';

const jakan = new Jakan().withMemory().forSearch();
const miscClient = new Jakan().withMemory().forMisc();

export default function DisplayAnime() {
  const [APIResponseTop, setAPIResponseTop] = useState([]);
  const [APIResponseSeason, setAPIResponseSeason] = useState([]);
  const [APIResponseUpcoming, setAPIResponseUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchAnime();
    }, 500);
  }, []);

  async function fetchAnime() {
    try {
      const responseTop: any = await miscClient.top('anime', {
        limit: 6,
      });

      const responseSeason: any = await miscClient.season(2023, 'winter', {
        //@ts-ignore
        limit: 6,
      });
      const responseUpcoming: any = await miscClient.season(2023, 'spring', {
        //@ts-ignore
        limit: 6,
      });

      setAPIResponseTop(responseTop.data);
      setAPIResponseSeason(responseSeason.data);
      setAPIResponseUpcoming(responseUpcoming.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="self-center flex flex-col text-zinc-300 gap-12">
      <div className="flex flex-col gap-1 hover:text-zinc-100 transition-colors">
        <div className="flex justify-between items-center">
          <summary className="list-none font-medium">
            POPULAR THIS SEASON
          </summary>
          <Link href="/Browse">
            <div className="text-xs">View All</div>
          </Link>
        </div>
        <DisplayQuery
          loading={loading}
          APIResponse={APIResponseSeason}
          index={'index'}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <summary className="list-none font-medium ">
            UPCOMING NEXT SEASON
          </summary>
          <Link href="/Browse">
            <button className="text-xs">View All</button>
          </Link>
        </div>
        <DisplayQuery
          loading={loading}
          APIResponse={APIResponseUpcoming}
          index={'index'}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <summary className="list-none font-medium ">ALL TIME POPULAR</summary>
          <Link href="/Browse">
            <button className="text-xs">View All</button>
          </Link>
        </div>
        <DisplayQuery
          loading={loading}
          APIResponse={APIResponseTop}
          index={'index'}
        />
      </div>
    </section>
  );
}

//FIXME center
