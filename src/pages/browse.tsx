import DisplayTags from '@/Components/Browse/DisplayTags';
import Head from 'next/head';
import { useState } from 'react';
import BrowseSearch from '../Components/Browse/BrowseSearch';
import DisplayQuery from '../Components/Browse/DisplayQuery';

export default function Browse() {
  const [loading, setLoading] = useState(false);
  const [APIResponse, setAPIResponse] = useState([]);
  const [queryParameters, setQueryParameters] = useState([]);

  return (
    <div>
      <Head>
        <title>Browse - AniBase</title>
      </Head>
      <div className="mt-12">
        <BrowseSearch
          setLoading={setLoading}
          setAPIResponse={setAPIResponse}
          setQueryParameters={setQueryParameters}
        />
        <DisplayTags queryParameters={queryParameters} />
        <DisplayQuery
          loading={loading}
          APIResponse={APIResponse}
          index={'browse'}
        />
      </div>
    </div>
  );
}
