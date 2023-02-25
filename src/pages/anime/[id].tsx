import DisplayAnime from '@/Components/Anime/DisplayAnime';
import DisplayAnimeLoadingTrue from '@/Components/Anime/DisplayAnimeLoadingTrue';
import { Jakan } from 'jakan';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const jakan = new Jakan().withMemory().forSearch();

export default function AnimePage() {
  const [loading, setLoading] = useState(true);
  const [APIResponse, setAPIResponse] = useState<any>([]);
  const [APIChar, setAPIChar] = useState<any>([]);
  const [APIStaff, setAPIStaff] = useState<any>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    setTimeout(() => {
      fetchContent();
    }, 2000);
  }, [router]);

  async function fetchContent() {
    const response = await jakan.anime(Number(id));
    const responseChar = await jakan.anime(Number(id), 'characters');
    const responseStaff = await jakan.anime(Number(id), 'staff');

    console.log(response);

    setAPIStaff(responseStaff.data);
    setAPIChar(responseChar.data);
    setAPIResponse(response.data);
    setLoading(false);
  }
  return (
    <div>
      {loading ? (
        <DisplayAnimeLoadingTrue />
      ) : (
        <DisplayAnime
          APIResponse={APIResponse}
          APIChar={APIChar}
          APIStaff={APIStaff}
        />
      )}
    </div>
  );
}
