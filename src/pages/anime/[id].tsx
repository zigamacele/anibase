import DisplayAnime from '@/Components/Anime/DisplayAnime';
import { Jakan } from 'jakan';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const jakan = new Jakan().withMemory().forSearch();

export default function AnimePage() {
  const [loading, setLoading] = useState(true);
  const [APIResponse, setAPIResponse] = useState<any>([]);
  const [APIChar, setAPIChar] = useState<any>([]);
  const [APIStaff, setAPIStaff] = useState<any>([]);
  const [APIRelations, setAPIRelations] = useState<any>([]);
  const [APIRecommendations, setAPIRecommendations] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    console.log('query ', router.query);
    setTimeout(() => {
      fetchContent();
    }, 100);
  }, [router]);

  async function fetchContent() {
    const response = await jakan.anime(Number(id));
    // const responseChar = await jakan.anime(Number(id), 'characters');
    // const responseStaff = await jakan.anime(Number(id), 'staff');
    // const responseRelations = await jakan.anime(Number(id), 'relations');
    // const responseRecommendations = await jakan.anime(
    //   Number(id),
    //   'recommendations'
    // );

    setAPIResponse(response.data);
    setLoading(false);
  }
  return (
    <div>{loading ? null : <DisplayAnime APIResponse={APIResponse} />}</div>
  );
}
